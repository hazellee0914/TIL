function solution(s) {
  let len = s.length;
  let mid = Math.floor(len / 2);

  // 홀수시 mid 1, 짝수 mid 2
  return len % 2 === 1 ? s.slice(mid, mid + 1) : s.slice(mid - 1, mid + 1);
}
console.log(solution('study'));

// function solution(s){
//    // 길이
//    let len = s.length;

//    // 가운데 인덱스
//    let mid = Math.floor(len / 2);

//    // 홀수
//    if(len % 2 === 1){
//     return s[mid]

//     // 짝수 두개
//    } else {
//     return s[mid - 1] + s[mid]
//    }
// }
// console.log(solution("study"));
