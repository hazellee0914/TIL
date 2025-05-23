/**
 * num을 입력받아 1부터 num까지 각각의 숫자 사이에 "-"가 들어간 문자열을 만들어야 합니다. 

  num에 3일 경우에는 "1-2-3"입니다.
  makeNumber(5) // 1-2-3-4-5
  makeNumber(7) // 1-2-3-4-5-6-7
 */
function makeNumber(num) {
  let res = '1';
  for (let i = 2; i <= num; i++) {
    res = res + '-' + i;
    console.log(res);
  }
}

console.log(makeNumber(5));
console.log(makeNumber(7));
