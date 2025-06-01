/**
 * 한 유저가 이메일을 아이디로 사용하여 회원가입을 하였습니다.

  그런데, 본인의 아이디가 무엇인지 잊어버려 '이메일 찾기'를 하려고 합니다.

  다행히 '이메일 찾기'를 하였지만, 우리는 개인정보 도용에 따른 피해방지를 위해 일부는 '**'로 표시하여 보여주어야 합니다.

  email에서 @앞 2글자를 '**'로 바꿔 나타내주세요.

  과정을 순차적으로 적어주세요.
  	// codeca**@gmail.com
 */

let email = 'codecamp@gmail.com';
let newArr = email.split('@');
console.log(newArr);

newArr[0] = newArr[0].slice(0, -2) + '**';

let makedEmail = newArr.join('@');
console.log(makedEmail);
