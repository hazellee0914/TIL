/**
 * 

    개발자를 꿈꾸던 원두는 드디어 희망하는 회사의 개발팀에 입사하게 되었습니다.

    막내인 원두는 매일 점심시간 메뉴를 정해야 하는데 

    메뉴 선정에 고민이 많은 원두를 위해

    선배는 점심시간 전마다 추천 메뉴를 메신저를 통해 전달해주기로 했습니다.

    선배에게 받은 추천 메뉴 **recommend**가 매개변수로 주어질 때, 

    해당 추천 메뉴를 ***menu*** 상수에 선언 및 할당하여 return하는 함수 solution을 완성하세요.

    **제한 사항**

    - recommend는 2글자 이상 20글자 이하의 문자열 타입입니다.
    - return 값으로 사용되는 menu 변수명은 변경되어선 안 됩니다.
    - menu 상수의 최종값은 recommend 매개변수가 담겨야 합니다.
 */

function solution(recommend) {
  const menu = recommend;
  return menu;
}

console.log(solution('부대찌개'));
console.log(solution('파스타'));
