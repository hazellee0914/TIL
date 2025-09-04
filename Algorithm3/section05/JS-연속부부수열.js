function solution(m, arr) {
  // 첫과 끝에 연속된 부분 수열 찾기
  // 변수 = 합
  // m보다 작으면 끝부분 증가
  //      크면  첫부분 증가
  let cnt = 0;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum > m) {
      sum -= arr[start];
      start++;
    }

    if (sum === m) {
      cnt++;
    }
  }

  return cnt;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
