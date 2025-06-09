/**
 * 회원가입을 하는 사람들에게 본인 인증을 위한 인증번호를 만들려고 합니다.

  함수를 실행할 때마다 4자리의 랜덤 숫자가 나올 수 있도록 만들어 주세요.

  random() // 1612
  random() // 9172
 */

function random() {
  const code = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  console.log(code);
  return code;
}

random();
