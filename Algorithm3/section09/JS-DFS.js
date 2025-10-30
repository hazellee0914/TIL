function solution(n, edges) {
  // 인접행렬 초기화 (1-indexed)
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  for (const [u, v] of edges) {
    graph[u][v] = 1; // 방향 그래프: u -> v
  }

  const visited = Array(n + 1).fill(false);
  let cnt = 0;

  function dfs(node) {
    if (node === n) {
      // 도착
      cnt += 1;
      return;
    }

    for (let next = 1; next <= n; next++) {
      if (graph[node][next] === 1 && !visited[next]) {
        visited[next] = true;
        dfs(next);
        visited[next] = false; // 백트래킹: 되돌아오면서 방문 해제
      }
    }
  }

  visited[1] = true; // 시작 정점 방문표시
  dfs(1);

  return cnt;
}

// 예제
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr)); // 출력: 6
