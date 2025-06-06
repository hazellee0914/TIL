/**
 * 유저가 회원가입을 할 때 '비밀번호' 입력과 '비밀번호 확인' 입력이 동일한지 검사를 해야 합니다. 

  두 입력이 같을 경우 "회원가입을 축하합니다."

  다를 경우 "비밀번호를 다시 확인해주세요." 

  라는 문구를 띄워주세요.

  추가 조건 1. 입력 값은 모두 문자열로 변환 후 비교합니다. 변환 후 동일 한 값이면 회원가입이 됩니다.

  추가 조건 2. 입력 값은 모두 소문자로 변환 후 비교합니다. 변환 후 동일 한 값이면 회원가입이 됩니다.

  	
  password("1234", "1235") // "비밀번호를 다시 확인해주세요."
  password("1234", "1234") // "회원가입을 축하합니다."
  password("1234", 1234) // "회원가입을 축하합니다."
  password("aaaa", "AAAA") // "회원가입을 축하합니다."
 */

function password(input1, input2) {
  input1 = String(input1).toLowerCase();
  input2 = String(input2).toLowerCase();

  if (input1 === input2) {
    console.log('회원가입을 축하합니다.');
  } else {
    console.log('비밀번호를 다시 확인해주세요.');
  }
}

password('1234', '1235');
password('1234', '1235');
password('1234', '1234');
password('1234', 1234);
password('aaaa', 'AAAA');
