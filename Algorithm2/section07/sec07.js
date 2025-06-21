/**
 * # 제비뽑기 용지

개발자 원두는 회사 이벤트를 위해 제비뽑기 종이를 만들어야 합니다.

종이는 1cm 정사각형으로 만들어야 합니다.

종이의 가로 길이가 a로 주어지고 세로 길이가 b로 주어질 경우, 

원두가 가위질을 몇 번 해야 하는지 return 하는 함수 solution을 완성하세요.
 */

function solution(a, b) {
  return a + (b - 1) * a;
}

console.log(solution(100, 100));
console.log(solution(1, 1));
console.log(solution(20, 50));
