/**
 * # 이번 달 신작이 나왔잖아?

개발자 원두는 피규어를 모으는 취미가 있습니다.

프로젝트에 성공하여 상여금을 받은 원두는 이 금액을 온전히 피규어 구매에 사용하고 싶습니다.

원두가 모으는 피규어의 가격은 개당 57,000원 입니다.

원두가 받게 되는 상여금 money 원이 매개변수로 주어질 때

원두가 최대로 살 수 있는 피규어의 개수를 return 하는 solution 함수를 완성해 주세요.
 */

function solution(money) {
  const figurePrice = 57000;

  return Math.floor(money / figurePrice);
}

console.log(solution(230000)); // 4
console.log(solution(769000)); // 13
console.log(solution(35000)); // 0
