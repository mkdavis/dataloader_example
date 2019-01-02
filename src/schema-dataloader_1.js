// This launchpad illustrates the use of DataLoader to perform
// batching and caching in GraphQL.
//
// Without a caching or batching mechanism,
// it's easy for a naive GraphQL server to
// issue new database requests each time a field is resolved.
//
// Without DataLoader, the GraphQL query requires 7 calls to the database.
// With DataLoader, the GraphQL query requires 2 calls to the database.
//
// All the calls to the database are logged. Press the "Logs" button at the bottom
// of the launchpad to view all the calls being made to the database.
//
// In order to show the use of DataLoader this launchpad uses a fake in-memory
// database. Normally you would use DataLoader with a database.
//
// For more info on DataLoader please refer to the docs: https://github.com/facebook/dataloader

import { makeExecutableSchema } from 'graphql-tools';
import DataLoader from "dataloader";

const typeDefs = `
	type User {
		id: ID!
		name: String!
		bestFriend: User
		friends: [User]!
	}

  type Query {
    me: User
  }
`;

const resolvers = {
  Query: {
    me: (root, args, context) => {
      return context.viewer;
    },
  },
  User: {
    // Uncomment these two lines to execute the query without DataLoader.
    bestFriend: user => findById(user.bestFriendId),
    friends: user => findByIds(user.friends)
    //bestFriend: (user, args, { loader }) => loader.load(user.bestFriendId),
    //friends: (user, args, { loader }) => loader.loadMany(user.friends)
  }
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export function context() {
  console.log("Start query execution.");
  return {
    viewer: stephen,
    // Intitialize the dataloader with the batch function.
    // Note, we create a new DataLoader per request to ensure the cache is flushed.
    loader: new DataLoader(findByIds)
  };
};


const bob = {
  id: 1,
  name: "Bob",
  bestFriendId: 2,
  friends: [2, 3, 4, 5, 6]
};

const sam = {
  id: 2,
  name: "Sam",
  bestFriendId: 1
};

const stephen = {
  id: 3,
  name: "Stephen",
  bestFriendId: 6,
	friends: [1, 4, 5]
};

const pete = {
  id: 4,
  name: "Pete",
  bestFriendId: 5
};

const chris = {
  id: 5,
  name: "Chris",
  bestFriendId: 4
};

const josh = {
  id: 6,
  name: "Josh",
  bestFriendId: 1
};

const users = [bob, sam, stephen, pete, chris, josh];

// Create a fake in-memory database with a single and batch find method.
const findById = (id) => {
  console.log(`Find by id ${id}.`);
  return Promise.resolve(users.find(user => user.id === id));
}

const findByIds = (ids) => {
  console.log(`Find by ids ${ids}.`);
  return Promise.resolve(users.filter(user => ids.indexOf(user.id) > -1));
}
