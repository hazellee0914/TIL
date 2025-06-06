/**
 * 유저가 쇼핑 목록에서 낮은 가격순으로 정렬하여 보려고 합니다.

  오른쪽에 주어진 List를 낮은 가격순으로 정렬해주세요.
 * 
 */

let List = [
  { number: 1, title: '장미', price: 4000 },
  { number: 2, title: '식칼', price: 7000 },
  { number: 3, title: '슬리퍼', price: 12000 },
  { number: 4, title: '주전자', price: 5000 },
  { number: 5, title: '선풍기', price: 5700 },
  { number: 6, title: '마우스 패드', price: 1800 },
  { number: 7, title: '휴대폰 케이스', price: 5500 },
  { number: 8, title: '마우스', price: 6500 },
];

console.log(Object.keys(List));

List.sort(function compare(a, b) {
  return a.price - b.price;
});

console.log(List);
