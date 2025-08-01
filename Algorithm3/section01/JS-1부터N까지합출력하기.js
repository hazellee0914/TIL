/**
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 */

function solution(n) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(solution(10));
