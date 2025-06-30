/**
 * # 오점뭐

개발팀의 막내인 원두는 오늘도 점심 메뉴를 결정해야 합니다.

슬슬 메뉴 고르기가 귀찮아진 원두는

매일매일 그날에 먹은 메뉴를 적어두고 그 안에서 고르려고 합니다.

기존에 적어둔 메뉴 목록이 배열 menuList로 주어지고,

오늘 먹은 점심 메뉴가 today로 주어집니다.

오늘 먹은 메뉴가 추가된 새로운 메뉴 목록을 return 하는 함수 solution을 작성해주세요.

**제한사항**

- 오늘 먹은 점심 메뉴는 기존 메뉴 목록의 가장 뒤에 추가합니다.
- 이미 메뉴가 존재한다면 추가하지 않습니다.
- 메뉴 목록의 길이가 10을 초과하면 더이상 메뉴를 추가하지 않습니다.

 */

function solution(menuList, today) {
  const isDuplicate = menuList.includes(today);
  const isFull = menuList.length >= 10;

  if (isDuplicate || isFull) return menuList;

  return [...menuList, today];
  // if (menuList.includes(today)) {
  //   return menuList;
  // }
  // if (menuList.length > 10) {
  //   return menuList;
  // }
  // menuList.push(today);
  // return menuList;
}

console.log(solution(['돈까스', '마라샹궈'], '마라탕'));
// [ "돈까스", "마라샹궈", "마라탕" ]
console.log(solution(['국밥', '파스타', '카레라이스'], '닭갈비'));
// [ "국밥", "파스타", "카레라이스", "닭갈비" ]
console.log(solution(['쌀국수'], '쌀국수'));
// [ "쌀국수" ]
