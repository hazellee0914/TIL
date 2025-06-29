/**
 * # 내 휴가는 너무 소중해

개발자 원두의 회사에서는

입사 3주년이면 5일을, 5주년이면 12일, 10주년이면 30일의 안식휴가가 주어집니다.

원두팀의 팀원 중 본인의 안식휴가 여부가 궁금한 팀원이 

본인의 연차를 입력하면 며칠의 안식휴가를 받을 수 있는지 

알 수 있는 함수를 만들어달라는 부탁을 했습니다.

연차가 year로 주어질 때, 안식휴가 일수를 return 하는 함수 solution을 만들어주세요.
 */

function solution(year) {
  if (year === 3) {
    return 5;
  } else if (year === 5) {
    return 12;
  } else if (year === 10) {
    return 30;
  } else {
    return 0;
  }
}

console.log(solution(3)); // 5
console.log(solution(4)); // 0
console.log(solution(5)); // 12
console.log(solution(7)); // 0
console.log(solution(10)); // 30
