/**
 * # 몇 분이세요?

개발자 원두는 주말에 새로 식당을 창업한 친구를 도와주기로 했습니다.

식당은 개업 전부터 인기가 많아 대부분의 예약이 완료된 상태입니다.

식당은 장소가 매우 협소하기 때문에

앞으로 신청되는 예약은 여분의 자리가 있는지에 따라서

예약이 가능할 수도 있고 불가능할 수도 있습니다.

현재까지 예약된 손님 리스트 **list**, 수용 가능한 예약자 수 **limit**,

새로 예약 신청된 손님의 수 **reports**가 매개변수로 주어질 때,

현재까지 예약된 손님의 수와 수용 가능한 손님의 수를 고려해

새로 예약을 신청한 손님을 받을 수 있는지를 boolean 타입으로

return하는 함수 solution을 완성하세요.

**제한 사항**

- list는 길이 1 이상 10 이하인 배열입니다.
- list의 원소는 1 이상 5 이하인 정수입니다.
- limit는 1 이상 15 이하인 정수입니다.
- reports는 1 이상 5 이하인 정수입니다.
- **while을 이용해서 문제를 풀어야 합니다.**
 */

function solution(list, limit, reports) {
  let total = 0;
  let i = 0;

  while (i < list.length) {
    total += list[i];
    i++;
  }

  total += reports;

  return total <= limit;
}

console.log(solution([1, 5, 4, 3], 15, 3)); // false
console.log(solution([1, 1, 1, 2], 7, 2)); // true
