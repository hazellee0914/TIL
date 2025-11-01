function solution(n, edges) {
  // 인접리스트 생성 (1..n)
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v); // 방향 그래프: u -> v
  }

  let count = 0;
  const visited = Array(n + 1).fill(false);

  function dfs(node) {
    if (node === n) {
      // 목적지 도착
      count += 1;
      return;
    }

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        dfs(next);
        visited[next] = false; // 되돌리기 (backtracking)
      }
    }
  }

  visited[1] = true; // 시작점 방문 표시
  dfs(1);

  return count;
}

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
console.log(solution(5, arr));
