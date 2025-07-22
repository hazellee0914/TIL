/**
 * # 의심하고 또 의심해

사내 시스템에 이름을 등록한 원두는

잘 등록되었는지 확인하기 위해서 개발팀의 명단을 출력해보려고 합니다.

각 팀의 명단을 담은 객체 **team**이 주어질 때

개발팀의 명단을 배열로 return하는 함수 solution을 완성해주세요.

**제한 사항**

- 개발팀의 명단은 객체 team의 dev라는 key의 값에 해당하는 배열입니다.
- team 객체에 개발팀에 해당하는 속성이 없는 경우에는 -1을 return합니다.
- team 객체에 개발팀은 있지만 명단에 아무도 경우에는 빈 배열을 return합니다.
 */

function solution(team) {
  if (!team.hasOwnProperty('dev')) {
    return -1;
  }

  return team.dev;
}

console.log(solution({ dev: ['카페', '라떼', '원두'] }));
// ["카페", "라떼", "원두"]
console.log(solution({ mento: ['은정', '세준', '아라'] }));
// -1
console.log(solution({ dev: [], operation: ['시윤'] }));
// []
