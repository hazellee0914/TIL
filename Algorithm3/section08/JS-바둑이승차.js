function solution(c, arr) {
  // 부분집합 -> 최대무게 찾기

  let res = 0; // 가장 무거운 무게를 저장
  let n = arr.length;

  function DFS(L, sum) {
    // L: 현재 바둑이 index, sum: 지금까지의 총 무게

    // 트럭 무게 초과하면 더 이상 탐색 안 함 (가지치기)
    if (sum > c) return;

    // 모든 바둑이를 다 고려했으면
    if (L === n) {
      res = Math.max(res, sum); // 최대 무게 갱신
    } else {
      // ① 현재 바둑이를 태움
      DFS(L + 1, sum + arr[L]);
      // ② 현재 바둑이를 안 태움
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0); // 탐색 시작
  return res;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
