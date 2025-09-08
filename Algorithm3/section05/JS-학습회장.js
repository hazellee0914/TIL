function solution(s) {
  // 1. 투표 결과 카운트
  let hash = s.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  // 2. 최다 득표자 찾기
  return Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str)); // C

// function solution(s) {
//   // 문자열 순회 각 후보 받은 표
//   // 최대값 후보 찾기

//   let hash = {};

//   for (let x of s) {
//     if (hash[x]) hash[x]++;
//     else hash[x] = 1;
//   }

//   let max = 0;
//   let res = '';
//   for (let key in hash) {
//     if (hash[key] > max) {
//       max = hash[key];
//       res = key;
//     }
//   }
//   return res;
// }

// let str = 'BACBACCACCBDEDE';
// console.log(solution(str));
