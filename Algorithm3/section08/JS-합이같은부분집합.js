function solution(arr) {
  // 합이 같으면 "YES"
  // 아니면 "NO"
  // {1,3,5,6,7,10} => {1.3.5.7} = { 6, 10 } => 16
  // 모든 원소를 선택하거나 선택하지 않음으로 나눠서 탐색
  // 전체 total / 2 => 부분집합이 하나라도 있으면 "YES"

  let res = 'NO';
  let total = arr.reduce((a, b) => a + b, 0); // 전체 합
  let n = arr.length;
  let flag = false; // 이미 정답을 찾았는지 여부

  function DFS(L, sum) {
    if (flag) return; // 이미 정답 찾으면 중단
    if (sum > total / 2) return; // 절반 초과 시 중단
    if (L === n) {
      if (sum === total - sum) {
        res = 'YES';
        flag = true;
      }
    } else {
      DFS(L + 1, sum + arr[L]); // 현재 원소 포함
      DFS(L + 1, sum); // 현재 원소 미포함
    }
  }
  DFS(0, 0);
  return res;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
