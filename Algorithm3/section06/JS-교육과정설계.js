function solution(need, plan) {
  // 필수과목 :CBA
  // need 순서대로 나와야함
  // 중간에 다른 과목 들어가도 ok
  // 순서를 어기면 NO

  let queue = need.split('');
  console.log(queue);

  for (let x of plan) {
    if (queue.includes(x)) {
      // 필수 과목 안에 있는지 확인
      if (x !== queue[0]) return 'NO'; // 순서 안 맞으면 실패
      queue.shift(); // 맞으면 꺼내기
    }
  }

  return queue.length === 0 ? 'YES' : 'NO'; // 다 이수했는지 확인
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
