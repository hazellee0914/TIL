function josephus(n, k) {
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = (res + k) % i;
  }
  return res + 1; // 실제 사람 번호는 1부터 시작
}

console.log(josephus(8, 3)); // 7

//  function solution(n, k){
//      let princes = Array.from({length: n}, (_,i) => i + 1);
//      let idx = 0;

//      while(princes.length > 1){
//       // k번째 왕자 찾기
//       idx = (idx + k - 1) % princes.length;
//       princes.splice(idx, 1)
//      }
//      return princes[0]
//     }

//     console.log(solution(8, 3));
