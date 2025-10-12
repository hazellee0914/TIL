function solution(n) {
  let answer = '';
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));

// function solution(n){
//          //  11 % 2 = 5...1
//          // 5 % 2 = 2...1
//          // 2 % 2 = 1...0
//          // 1 % 2 0...1
//         //  1011
//     if (n === 0) return  "";
//     return solution(Math.floor(n / 2)) + n % 2
//   }

// console.log(solution(11));
