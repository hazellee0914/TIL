function solution(s) {
  // 문자열 한글자씩
  // 이미 등장한 글자 건너뛰고, 처음 등장한 글자만 결과 추가
  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      res += s[i];
    }
  }
  return res;
}
console.log(solution('ksekkset'));
