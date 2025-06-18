/**
 * 개발자 원두는 운이 좋게 출근길에 n원을 주웠습니다.

팀원들과 친해질 겸 현재 자신이 가진 돈 6,000원과 n원을 합쳐

팀원들의 커피를 사주려 합니다.

팀원 모두에게 공평한 음료를 제공하기 위해 가장 무난한

4,100원짜리 아메리카노를 주문하기로 했습니다.

출근길에 주운 돈 n이 매개변수로 주어지고, 팀원의 수가 members로 주어질 경우

원두에게 남은 돈이 얼마인지 return하는 함수 solution을 완성하세요.

**제한 사항**

- n과 members는 number타입으로 제공됩니다.
- 0 < n ≤ 1,000,000
- 0 < members ≤ 20
- 거스름돈은 항상 0 이상의 정수입니다.
 */

function solution(n, members) {
  // 여기에 코드를 작성하세요.

  return n * members;
}

console.log(solution(50000, 12));
console.log(solution(35000, 9));
