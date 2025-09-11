function solution(s) {
  let stack = [];
  for (let ch of s) {
    if (ch === '(') stack.push(ch);
    else {
      if (stack.length === 0) return 'NO'; // 짝이 없음
      stack.pop();
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}

let a = '(()(()))(()';
console.log(solution(a)); // 결과: NO

// function solution(s) {
//   // "(". +1
//   // ")"  -1
//   // count === 0

//   let cnt = 0;
//   for (let x of s) {
//     if (x === ')') cnt++;
//     else cnt--;

//     if (cnt < 0) return 'NO';
//   }
//   return cnt === 0 ? 'YES' : 'NO';
// }

// let a = '(()(()))(()';
// console.log(solution(a));
