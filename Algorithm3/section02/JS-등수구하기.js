function solution(arr) {
  // 점수가 높은 등수
  // 같은 점수면 같은 등수
  // 그 다음 등수는 같은 점수 개수를 고려해서 밀려남

  // 100  -> 1
  // 92 -> 2
  // 89 -> 3
  // 87 -> 4
  // 76 -> 5

  let n = arr.length;
  let res = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) {
        res[i]++;
      }
    }
  }
  return res;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
