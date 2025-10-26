function solution(n, r) {
  // r === 0 -> nC0 = 1
  // r === n -> nCn = 1
  // memo[n][r]
  const memo = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));

  function DFS(n, r) {
    // 기저 조건
    if (r === 0 || n === r) return 1;

    // 이미 계산된 값이 있으면 재사용
    if (memo[n][r] !== 0) return memo[n][r];

    // 재귀로 내려가서 계산하고 memo에 저장
    memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    return memo[n][r];
  }

  return DFS(n, r);
}

console.log(solution(5, 3));
