/**
 * # 프로젝트 명세서

개발자 원두는 담당하고 있는 프로젝트의 명세서를 작성하고 있습니다.

프로젝트에서 사용된 기술 스택의 이름이 배열 stacks로 주어질 때

내림차순으로 정렬하여 return하는 함수 solution을 완성해주세요.

**제한사항**

- 배열 stacks의 길이는 1 이상 10 이하입니다.
- 배열 stacks의 각 단어의 길이는 1 이상 10 이하인 문자열입니다.
- 배열 stacks의 단어들은 영문 소문자로만 이루어져 있습니다.
 */

function solution(stacks) {
  stacks.sort();
  stacks.reverse();
  return stacks;
}

console.log(solution(['typescript', 'express', 'node', 'react']));
// ["typescript", "react", "node", "express"]
//
console.log(solution(['docker', 'graphql', 'javascript']));
// ["javascript", "graphql", "docker"]
