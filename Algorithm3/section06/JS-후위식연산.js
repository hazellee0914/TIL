function solution(s) {
  // 스택

  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) {
      // 숫자인 경우
      stack.push(Number(x));
    } else {
      // 연산자인 경우
      let b = stack.pop(); // 두 번째 피연산자
      let a = stack.pop(); // 첫 번째 피연산자
      if (x === '+') stack.push(a + b);
      else if (x === '-') stack.push(a - b);
      else if (x === '*') stack.push(a * b);
      else if (x === '/') stack.push(a / b);
    }
  }

  return stack[0]; // 최종 결과
}

let str = '352+*9-';
console.log(solution(str));
