function solution(m, arr) {
  function solution(m, arr) {
    let n = arr.length;
    let lt = 0;
    let sum = 0;
    let res = 0;

    for (let rt = 0; rt < n; rt++) {
      sum += arr[rt]; // 오른쪽 원소 추가
      // console.log(`rt=${rt}, arr[rt]=${arr[rt]}, sum=${sum}`);

      // 합이 M을 초과하면 왼쪽 줄이기
      while (sum > m) {
        // console.log(`  sum=${sum} > ${m}, lt=${lt} 이동`);
        sum -= arr[lt];
        lt++;
        // console.log(`  → lt=${lt}, sum=${sum}`);
      }

      // 현재 rt에서 만들 수 있는 부분수열 개수
      let count = rt - lt + 1;
      res += count;
      // console.log(`부분수열 개수 추가: ${count}, 누적 res =${res }`);
    }

    return res;
  }

  let a = [1, 3, 1, 2, 3];
  console.log('최종 결과:', solution(5, a));
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
