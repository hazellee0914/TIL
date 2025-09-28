function solution(meeting) {
  // 회의끝나는 시간이 빠른 순서대로 정렬
  // 끝나는 회의부터 차례대로 선택

  // 끝나는 시간 기준
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let cnt = 0;
  let endTime = 0;

  // meeting
  for (let [start, end] of meeting) {
    if (start >= endTime) {
      cnt++;
      endTime = end;
    }
  }
  return cnt;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
