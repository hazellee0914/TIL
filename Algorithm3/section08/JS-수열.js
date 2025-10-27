function solution(n, f) {
  // n = 4 , f = 16
  // 맨 윗줄 : 3 1 2 4
  // -> 4 3 6
  // -> 7, 9
  // -> 16

  let answer;
  let flag = false;
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);

  // 조합값 미리 계산 (파스칼 삼각형)
  function combi(n, r) {
    if (r === 0 || n === r) return 1;
    else return combi(n - 1, r - 1) + combi(n - 1, r);
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = true;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16)); // [3, 1, 2, 4]
