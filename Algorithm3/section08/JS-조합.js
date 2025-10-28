function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);

  function DFS(L, start) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = start; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1, i + 1); // 다음 숫자는 i+1부터 시작 (중복 방지)
      }
    }
  }

  DFS(0, 1);
  answer.forEach((v) => console.log(v.join(' ')));
  console.log(answer.length);
}

solution(4, 2);
