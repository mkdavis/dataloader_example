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
    //bestFriend: user => findById(user.bestFriendId),
    //friends: user => findByIds(user.friends)
    bestFriend: (user, args, { loader }) => loader.load(user.bestFriendId),
    friends: (user, args, { loader }) => loader.loadMany(user.friends)
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
    loader: new DataLoader(findByIdsLoad)
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
  bestFriendId: 5,
	friends: [1, 2, 6]
};

const chris = {
  id: 5,
  name: "Chris",
  bestFriendId: 4
};

const josh = {
  id: 6,
  name: "Josh",
  bestFriendId: 1,
	friends: [4]

};

const brenda = {
  id: 1,
  name: "Branda",
  bestFriendId: 2,
  friends: [2, 3, 5, 6]
};

const sarah = {
  id: 2,
  name: "Sarah",
  bestFriendId: 1
};

const stephanie = {
  id: 3,
  name: "Stephanie",
  bestFriendId: 6,
	friends: [1, 4, 5, 6]
};

const patty = {
  id: 4,
  name: "Patty",
  bestFriendId: 5,
	friends: [1, 2, 6]
};

const christine = {
  id: 5,
  name: "Christine",
  bestFriendId: 4
};

const jane = {
  id: 6,
  name: "Jane",
  bestFriendId: 1,
	friends: [4]

};

const users = [bob, sam, stephen, pete, chris, josh];
const girl_users = [brenda, sarah, stephanie, patty, christine, jane];

// Create a fake in-memory database with a single and batch find method.
const findById = (id) => {
  console.log(`Find by id ${id}.`);
  return Promise.resolve(girl_users.find(user => user.id === id));
}

const findByIdsLoad = (ids) => {
  console.log(`LOAD Find by ids ${ids}.`);
	console.log('LOAD ALL Value(s):', girl_users.filter(x => x>''));
	console.log('LOAD friend(s) array:', girl_users.filter(guser => ids.indexOf(guser.id) > -1));
  return Promise.resolve(girl_users.filter(guser => ids.indexOf(guser.id) > -1));
}

const findByIds = (ids) => {
  console.log(`Find by ids ${ids}.`);
	console.log('ALL Value(s):', users.filter(x => x>''));
	console.log('friend(s) array:', users.filter(user => ids.indexOf(user.id) > -1));
  return Promise.resolve(users.filter(user => ids.indexOf(user.id) > -1));
}
