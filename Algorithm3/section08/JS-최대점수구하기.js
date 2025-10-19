function solution(m, ps, pt) {
  // 최대 점수 구하기 DFS(깊이 우선탐색)
  // 제한 시간 M 안에 얻을 수 있는 최대 점수 합
  // 풀거나 / 안 풀거나 두가지 선택 -> 완전 탐색

  let res = 0;
  let n = ps.length;

  function DFS(L, sum, time) {
    if (time > m) return; // 제한 시간 초과 시 중단
    if (L === n) {
      // 모든 문제를 다 확인한 경우
      res = Math.max(res, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]); // 푼 경우
      DFS(L + 1, sum, time); // 안 푼 경우
    }
  }
  DFS(0, 0, 0);
  return res;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
