// tonic ^6.0.0
const DataLoader = require('dataloader');
  console.log('start here: ');

const getPostTagsUsingPostId = (ids) => {
  console.log('****** =');
  console.log('IDs: ',ids);

  return Promise.resolve(ids);
};

const TagByPostIdLoader = new DataLoader(getPostTagsUsingPostId);
  console.log('1st LOAD: #3');
TagByPostIdLoader.load(3);
console.log('2nd LOAD: #5');
TagByPostIdLoader.load(5);
console.log('3rd LOAD: #7');
TagByPostIdLoader.load(7);
console.log('4th LOAD: #9');
TagByPostIdLoader.load(9);


// Force next-tick
setTimeout(() => {
  console.log('5th LOAD: #11');
  TagByPostIdLoader.load(11);
  console.log('6th LOAD: #12');
  TagByPostIdLoader.load(12);
  TagByPostIdLoader.load(13);
}, 100);

// Force next-tick
setTimeout(() => {
  TagByPostIdLoader.load(21);
  TagByPostIdLoader.load(22);
  TagByPostIdLoader.load(23);
  TagByPostIdLoader.load(24);
  TagByPostIdLoader.load(25);
}, 200);

setTimeout(() => {
  TagByPostIdLoader.load(31);
  TagByPostIdLoader.load(32);
  TagByPostIdLoader.load(33);
}, 200);

TagByPostIdLoader.load(100);
TagByPostIdLoader.load(101);
TagByPostIdLoader.load(102);
TagByPostIdLoader.load(103);
TagByPostIdLoader.load(104);
TagByPostIdLoader.load(105);
TagByPostIdLoader.load(106);
TagByPostIdLoader.load(107);
TagByPostIdLoader.load(108);
TagByPostIdLoader.load(109);
TagByPostIdLoader.load(110);
TagByPostIdLoader.load(111);
TagByPostIdLoader.load(112);
TagByPostIdLoader.load(113);
TagByPostIdLoader.load(114);
TagByPostIdLoader.load(115);
TagByPostIdLoader.load(116);
TagByPostIdLoader.load(117);
TagByPostIdLoader.load(118);
TagByPostIdLoader.load(119);
TagByPostIdLoader.load(120);
TagByPostIdLoader.load(121);
TagByPostIdLoader.load(122);
TagByPostIdLoader.load(123);
TagByPostIdLoader.load(124);
TagByPostIdLoader.load(125);
TagByPostIdLoader.load(126);
TagByPostIdLoader.load(127);
TagByPostIdLoader.load(128);
TagByPostIdLoader.load(129);
TagByPostIdLoader.load(130);
TagByPostIdLoader.load(131);
TagByPostIdLoader.load(132);
TagByPostIdLoader.load(133);
TagByPostIdLoader.load(134);
TagByPostIdLoader.load(135);
TagByPostIdLoader.load(136);
TagByPostIdLoader.load(137);
TagByPostIdLoader.load(138);
TagByPostIdLoader.load(139);
TagByPostIdLoader.load(140);
TagByPostIdLoader.load(141);
TagByPostIdLoader.load(142);
TagByPostIdLoader.load(143);
TagByPostIdLoader.load(144);
TagByPostIdLoader.load(145);
TagByPostIdLoader.load(146);
TagByPostIdLoader.load(147);
TagByPostIdLoader.load(148);
TagByPostIdLoader.load(149);
TagByPostIdLoader.load(150);
TagByPostIdLoader.load(151);
TagByPostIdLoader.load(152);
TagByPostIdLoader.load(153);
TagByPostIdLoader.load(154);
TagByPostIdLoader.load(155);
TagByPostIdLoader.load(156);
TagByPostIdLoader.load(157);
TagByPostIdLoader.load(158);
TagByPostIdLoader.load(159);
TagByPostIdLoader.load(160);
TagByPostIdLoader.load(161);
TagByPostIdLoader.load(162);
TagByPostIdLoader.load(163);
TagByPostIdLoader.load(164);
TagByPostIdLoader.load(165);
TagByPostIdLoader.load(166);
TagByPostIdLoader.load(167);
TagByPostIdLoader.load(168);
TagByPostIdLoader.load(169);
TagByPostIdLoader.load(170);
TagByPostIdLoader.load(171);
TagByPostIdLoader.load(172);
TagByPostIdLoader.load(173);
TagByPostIdLoader.load(174);
TagByPostIdLoader.load(175);
TagByPostIdLoader.load(176);
TagByPostIdLoader.load(177);
TagByPostIdLoader.load(178);
TagByPostIdLoader.load(179);
TagByPostIdLoader.load(180);
TagByPostIdLoader.load(181);
TagByPostIdLoader.load(182);
TagByPostIdLoader.load(183);
TagByPostIdLoader.load(184);
TagByPostIdLoader.load(185);
TagByPostIdLoader.load(186);
TagByPostIdLoader.load(187);
TagByPostIdLoader.load(188);
TagByPostIdLoader.load(189);
TagByPostIdLoader.load(190);
console.log('LAST LOAD: #44');
TagByPostIdLoader.load(44);
