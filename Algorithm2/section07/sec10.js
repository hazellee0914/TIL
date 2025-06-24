/**
 * # 덧셈 계산기

똑똑한 개발자 원두는 피드백을 반영하여 덧셈 계산기를 개선하려 합니다.

문자열 타입으로 된 숫자를 입력해도 제대로 작동하도록 고쳐가기로 합니다.

입력값이 num1, num2로 주어질 때

입력된 값의 합을 return하는 함수 solution을 만들어주세요.
 */

function solution(num1, num2) {
  return Number(num1) + Number(num2);
}

console.log(solution('1', 2)); // 3
console.log(solution(5, 6)); // 11
console.log(solution('3', '5')); // 8
