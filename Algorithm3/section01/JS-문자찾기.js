// function solution(s, t){
//            let count = 0;
//            for(const char of s){
//             if(char === t){
//               count++
//             }
//            }
//            return count;
//           }

//           let str="COMPUTERPROGRAMMING";
//           console.log(solution(str, 'R'));

// function solution(s, t){
//   return Array.from(s).filter(char => char === t).length
// }
//           let str="COMPUTERPROGRAMMING";
//           console.log(solution(str, 'R'));

function solution(s, t) {
  return Array.from(s).reduce((acc, char) => {
    return acc + (char === t ? 1 : 0);
  }, 0);
}
let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
