/**
 * # 분기별 일정

  개발자 원두는 앞으로의 계획을 세우기 위해 분기별로 일정표를 짜려고 합니다.

  좀 더 편한 계획을 위해 원두는 

  해당 월을 입력하면 몇 분기인지 number 형태로 알려주는 알고리즘을 만들려 합니다.

  특정 월이 month로 주어질 때, month는 몇 분기에 해당하는지 return 하는 함수 solution을 완성하세요.
 */

function solution(month) {
  return Math.ceil(month / 3);
}

// function solution(month) {
//   if (month >= 1 && month <= 3) {
//     // 1~3월 → 1분기
//     return 1;
//   } else if (month >= 4 && month <= 6) {
//     // 4~6월 → 2분기
//     return 2;
//   } else if (month >= 7 && month <= 9) {
//     // 7~9월 → 3분기
//     return 3;
//   } else if (month >= 10 && month <= 12) {
//     // 10~12월 → 4분기
//     return 4;
//   } else {
//     return '유효하지 않은 월입니다.'; // 1~12월이 아닐 경우
//   }
// }

console.log(solution(4)); // 2
console.log(solution(12)); // 4
