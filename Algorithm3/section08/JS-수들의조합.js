function solution(n, k, arr, m) {
  // 2,4,5,8,12
  // 6의 배수 -> 4 + 8 = 12 // 2 + 4 +12 => 18
  let res = 0;

  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) res++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return res;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
