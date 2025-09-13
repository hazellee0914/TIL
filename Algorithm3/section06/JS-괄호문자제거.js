function solution(s) {
  // 문자열 왼쪽부터~
  // ( -> cnt +)
  // ) -> cnt -1
  // cnt 음수 -> x
  // 돌고 난후 cnt == 0 이면 올바른괄호, 아니면 올바르지 않음

  let cnt = 0;

  for (let x of s) {
    if (x === '(') cnt++;
    // console.log(x);
    else if (x === ')') cnt--;
    console.log(x);

    if (cnt < 0) return 'NO';
  }

  return cnt === 0 ? 'YES' : ' NO';
}

let str1 = '(())()';
let str2 = '(()()))';
let str3 = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(solution(str1)); // YES
console.log(solution(str2)); // NO
console.log(solution(str3)); // YES

// function solution(s){
//     let answer;
//     let stack=[];
//     for(let x of s){
//         if(x===')'){
//             while(stack.pop()!=='(');
//         }
//         else stack.push(x);
//     }
//     answer=stack.join('');
//     return answer;
// }

// let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));
