/**
 * # 야 넌 마춤뻡 하나 못 맞추냐

원두에게는 중학교 때부터 친했던 친구 모카가 있습니다.

모카는 작가인데, 최근에 쓴 원고에서 오타가 발견되어 곤란을 겪고 있습니다.

알고 보니 모카가 쓰던 키보드가 고장 나서 a가 q로 작성되었는데,

다행히도 a와 q를 함께 쓰고 있는 문장은 없다고 합니다.

원두는 모카를 도와주기 위해 오타를 한 번에 수정해주는 함수를 만들려고 합니다.

오타가 있는 문장 str이 주어질 때, 수정할 오타가 있다면 수정된 문장을,

오타가 없다면 -1을 return하는 함수 solution을 완성하세요.

**제한 사항**

- str은 영문 알파벳으로 구성되어 있습니다.
- str은 길이 1 이상 100 이하의 문자열입니다.
- 대/소문자를 구분해야 합니다.
 */

function solution(str) {
  if (!str.includes('q') && !str.includes('Q')) {
    return -1;
  }

  return str.replaceAll('q', 'a').replaceAll('Q', 'A');
}

console.log(solution("It works, I don't know why."));
// -1
console.log(
  solution(
    'Qre you sleeping? Yes, now shut up. I know how to fix thqt bug on line 255.'
  )
);
// Are you sleeping? Yes, now shut up. I know how to fix that bug on line 255.
