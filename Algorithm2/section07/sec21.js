/**
 * # 공구 문의는 DM으로 부탁드릴게요

원두가 근무하고 있는 회사에서 전 직원의 키보드를 새것으로 교체하려고 합니다.

여러 커머스 사이트의 가격을 비교하여 최저가를 찾아야 합니다.

사이트에 고지된 키보드의 가격이 prices 배열에 담겨 매개변수로 주어질 때

가장 저렴하게 구매할 수 있는 가격을 return 하는 solution 함수를 완성해 주세요.

**제한 사항**

- prices는 길이 2 이상 10 이하인 배열입니다.
- keyboard의 원소는 1 이상 200000 이하의 number 타입입니다.
 */

function solution(prices) {
  return Math.min(...prices);
}

console.log(solution([20000, 113000, 67000, 40500, 99000])); // 20000
console.log(solution([19900, 54200, 43000])); // 19900
