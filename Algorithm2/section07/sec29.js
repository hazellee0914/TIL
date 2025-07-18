/**
 * # 선배~ 밥 사주세요~!

개발자 원두는 선배 개발자와 함께 협업하여

페이지를 리뉴얼하는 작업을 시작했습니다.

첫날에는 함께 업무 분담을 해서 잘 진행하고 있었는데,

두 번째 날부터는 어째서인지 회사에서 선배 개발자를 볼 수가 없게 되었습니다.

선배가 원두를 피해서 회사 어딘가에 숨었을 것이라고 직감한 원두는

회사를 전부 뒤져서라도 선배 개발자의 위치를 찾아내려고 합니다.

회사 각각의 방을 나타내는 지도에 

선배 개발자의 위치가 1로 표시된 2차원 배열 **map**이 주어질 때,

선배 개발자가 위치한 방의 숫자와 몇 번 자리에 있는지를 찾아

**”선배님은 x번 방, y번 자리에 있습니다.”** 라는 문구를 return 하는 solution 함수를 완성하세요.

만약, 선배 개발자의 위치를 찾지 못한 경우에는

**”선배님을 찾을 수가 없습니다.”** 라는 문구를 return 해주세요.

**제한 사항**

- 배열 map은 길이 1 이상, 10 이하인 2차원 배열입니다.
- 배열 map 안에 있는 배열의 각 요소는 0 또는 1인 number입니다.
- 각 방의 자리 수는 1 이상 3 이하입니다.
- 방 번호와 자리 번호는 배열의 왼쪽에서 1부터 시작하여 1씩 증가합니다.
예를 들어, 배열 map에서 index 0에 해당하는 배열 안의 index 1의 위치는
1번째 방의 2번 자리를 의미합니다.
 */

function solution(map) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        return `선배님은 ${i + 1}번째 방, ${j + 1}번 자리에 있습니다.`;
      }
    }
  }
  return '선배님을 찾을 수가 없습니다.';
}

console.log(solution([[0, 0], [0], [0, 1, 0], [0, 0]]));
// “선배님은 3번째 방, 2번 자리에 있습니다.”
console.log(solution([[0], [0, 0], [0], [0, 0], [0, 0]]));
// “선배님을 찾을 수가 없습니다.”
