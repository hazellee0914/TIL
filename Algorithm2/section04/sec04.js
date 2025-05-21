/**
 * 입력되는 달(month)에 따라 각 달에 몇 일이 있는지 보여주는 함수를 만들려고 합니다.

  각 조건에 해당하는 알맞은 값을 입력해주세요.

  - month는 1~12의 숫자

**`주의 사항`**
- 2월은 28일로 계산합니다.
 */

function days(month) {
  if (month === 2) return 28;
  if ([4, 6, 9, 11].includes(month)) return 30;
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
}
console.log(days(1));
console.log(days(2));
console.log(days(4));
