/**
 * 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.
  해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
  "의류"를 구매한 횟수에 따라 등급을 나타내세요.


  등급표
  "0~2"  ⇒ Bronze
  "3~4" ⇒ Silver
  5이상 ⇒ Gold

  의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.
 */

const myShopping = [
  { category: '과일', price: 12000 },
  { category: '의류', price: 10000 },
  { category: '의류', price: 20000 },
  { category: '장난감', price: 9000 },
  { category: '과일', price: 5000 },
  { category: '의류', price: 10000 },
  { category: '과일', price: 8000 },
  { category: '의류', price: 7000 },
  { category: '장난감', price: 5000 },
  { category: '의류', price: 10000 },
];

const clothes = myShopping.filter((iter) => iter.category === '의류');

const count = clothes.length;

const sum = clothes.reduce((acc, iter) => acc + iter.price, 0);

let tier = '';
if (count >= 5) {
  tier = 'Gold';
} else if (count >= 3) {
  tier = 'Silver';
} else {
  tier = 'Bronze';
}

console.log(
  `의류를 구매한 횟수는 총 ${count}회 금액은 ${sum}원이며 등급은 ${tier}입니다.`
);

// let count = 0;
// let sum = 0;
// let tier = '';

// for (const a of myShopping) {
//   if (a.category === '의류') {
//     count++;
//     sum = sum + a.price;
//   }
// }

// if (count >= 5) {
//   tier = 'Gold';
// } else if (count >= 3) {
//   tier = 'Silver';
// } else {
//   tier = 'Bronze';
// }
// console.log(
//   '의류를 구매한 횟수는 총 ' +
//     count +
//     '회 금액은 ' +
//     sum +
//     '원이며 등급은 ' +
//     tier +
//     '입니다.'
// );
