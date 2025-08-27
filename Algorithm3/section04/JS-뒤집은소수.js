// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  return arr
    .map((x) => Number(x.toString().split('').reverse().join(''))) // 숫자 뒤집기
    .filter((num) => isPrime(num)); // 소수만 남기기
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
// 👉 [23, 2, 73, 2, 3]

// function isPrime(num) {
//   // 32 -> 23
//   // 910 -> 19
//   // 뒤집은 숫자가 소수!!
//   // 32 -> "32" -> ["3", "2"] -> ["2", "3"] -> "23" -> 23

//   // 소수
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(arr) {
//   let res = [];
//   for (let x of arr) {
//     // console.log(x);
//     // 숫자 뒤집기
//     let reversed = Number(x.toString().split('').reverse().join(''));
//     // console.log(reversed);
//     // 소수라면 결과에 추가
//     if (isPrime(reversed)) res.push(reversed);
//     // console.log(res);
//   }
//   return res;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));
