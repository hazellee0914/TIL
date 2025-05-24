/**
 * num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

  num에 5일 경우에는 "135"입니다.
  makeOdd(5) // 135
  makeOdd(7) // 1357
 */

function makeOdd(num) {
  let res = '';
  for (let i = 1; i <= num; i += 2) {
    if (i % 2 === 1) {
      res += i;
      console.log(res);
    }
  }
}

makeOdd(5);
makeOdd(7);
