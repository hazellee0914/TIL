function solution(times) {
  // 도착시간을 +1 , 떠나는 시간 -1
  // 시간이 같다면 -1

  let events = [];

  // 1. 도착(+1), 떠남(-1) 이벤트 생성
  for (let [start, end] of times) {
    events.push([start, 1]); // 도착
    events.push([end, -1]); // 떠남
  }

  // 2. 시간 순으로 정렬 (시간 같으면 떠남(-1)을 먼저 처리)
  events.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let current = 0;
  let maxPeople = 0;

  // 3. 순회하면서 현재 인원 계산
  for (let [time, type] of events) {
    current += type;
    maxPeople = Math.max(maxPeople, current);
  }

  return maxPeople;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr)); // 👉 2
