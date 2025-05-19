/**
   * 상수 number는 핸드폰 번호가 담긴 문자열입니다. 

  해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.

  **`입력 인자`**

  - X

  **`주의 사항`**

  - slice를 사용해서 문제를 풀어주세요.
  console.log(arr) // ["010", "1234", "5678"]
 */

const number = '01012345678';

let arr = [];

console.log(number.slice(0, 3));
console.log(number.slice(3, 7));
console.log(number.slice(7, 11));

arr.push(number.slice(0, 3));

arr.push(number.slice(3, 7));

arr.push(number.slice(7));

console.log(arr);
