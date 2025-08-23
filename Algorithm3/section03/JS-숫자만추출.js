function solution(str) {
  return parseInt(
    Array.from(str)
      .filter((ch) => !isNaN(ch))
      .join(''),
    10
  );
}
let str = 'g0en2T0s8eSoft';
console.log(solution(str));

//  function solution(str){
//            // 정규식
//            let onlyNum = str.replace(/[^0-9]/g, "")

//            // 자연수
//            return parseInt(onlyNum, 10)

//  }
//           let str="g0en2T0s8eSoft";
//           console.log(solution(str));

//  function solution(str){
//             // 문자열에서 숫자만 추출
//             // 숫자만 모아서 문자열로 만들기

//            let res = ''
//            for(let ch of str){
//             if(!isNaN(ch)) res += ch;
//            }
//            return Number(res, 10)
//           }

//           let str="g0en2T0s8eSoft";
//           console.log(solution(str));
