function solution(s) {
  let lower = s.toLowerCase();
  let len = lower.length;

  // reduce : 회문 여부를 true/false 로 누적
  let isPalindrome = lower.split('').reduce((acc, ch, i) => {
    // 앞 문자와 뒷 문자를 비교
    if (ch !== lower[len - 1 - i]) return false;
    return acc;
  }, true);

  return isPalindrome ? 'YES' : 'NO';
}

let str = 'goooG';
console.log(solution(str)); // YES

//   function solution(s){
//           // 1. 대소문자 통일 (소문자 변환)
//   let lower = s.toLowerCase();

//   // 2. 문자열을 뒤집기
//   let reversed = lower.split('').reverse().join('');

//   // 3. 원래 문자열과 비교
//   if(lower === reversed) return "YES";
//   else return "NO";
// }

//             let str="goooG";
//             console.log(solution(str));
