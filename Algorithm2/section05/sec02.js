/**
 * 
 * 비밀번호 2개를 입력받아 대소문자 구분없이 비교하는 기능을 하는 함수를 화살표 함수를 이용해 만들어야 합니다.

  추가 조건 1. 만약 비밀번호가 8~16자리가 아니라면, "비밀번호는 8~16"자리여야 합니다" 라는 문구를 띄워야 합니다.

  추가 조건 2. 만약 두 개의 비밀번호 값이 서로 다르면 "비밀번호를 다시 확인해주세요" 라는 문구를 띄워야 합니다.
 */

const validation = (pwd1, pwd2) => {
  pwd1 = pwd1.toLowerCase();
  pwd2 = pwd2.toLowerCase();

  if (pwd1.length < 8 || pwd1.length > 16) {
    console.log('비밀번호는 8 ~ 16 자리여야 합니다');
  } else if (pwd1 !== pwd2) {
    console.log('비밀번호를 다시 확인해주세요');
  } else {
    console.log('Welcome');
  }
};

// let pwd1 = 'a1B2c3D4';
// let pwd2 = 'A1b2C3d4';
// validation(pwd1, pwd2);

let pwd1 = '1234';
let pwd2 = '1234';
validation(pwd1, pwd2);

// let pwd1 = '12345678';
// let pwd2 = '123478';
// validation(pwd1, pwd2);
