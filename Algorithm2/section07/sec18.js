/**
 * # 벌레 퇴치

개발자 원두는 새로운 기능을 개발하는 중입니다.

작성한 코드 중에 버그를 찾아 제거하세요. 

배열 feature에는 문자열 ‘code’ 또는 ‘bug’가 담겨있습니다. 

feature에 ‘bug’가 있다면 제거한 배열을 return하는 함수 solution을 완성해주세요.

**제한사항**

- 배열 feature 안에 있는 ‘bug’의 개수는 0개 또는 1개입니다.
- 배열 feature의 길이는 1 이상 10 이하입니다.
*/

function solution(feature) {
  return feature.filter((item) => item !== 'bug');
}

console.log(solution(['code', 'bug', 'code'])); // ["code", "code"]
console.log(solution(['code', 'code'])); // ["code", "code"]
