function solution(s) {
  let stack = [];
  let pieces = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
      // console.log(`${i}번째: '(' push → stack = [${stack.join(' ')}]`);
    } else {
      stack.pop(); // ')' 만나면 일단 하나 pop

      if (s[i - 1] === '(') {
        // 레이저일시
        pieces += stack.length;

        // console.log(
        //   `${i}번째: '()' 레이저 → 조각 +${
        //     stack.length
        //   }, 총 ${pieces}, stack = [${stack.join(' ')}]`
        // );
      } else {
        // 막대기 끝난 경우
        pieces += 1;
        // console.log(`${i}번째: 막대 끝 → 조각 +1, 총 ${pieces}, stack = [${stack.join(' ')}]`);
      }
    }
  }
  // console.log("최종 조각 수 =", pieces);

  return pieces;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
