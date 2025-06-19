/**
 * # 이런 건 맨날 나만 시키지

  개발자 원두는 사내 프로그램 테스트를 위한

  테스트용 아이디를 만드는 업무를 받았습니다.

  원두는 개발팀 팀원의 영어 이름과 생년월일 6자리를 뒤에 붙인 형태로

  아이디를 만들기로 하였습니다.

  개발팀 팀원의 영어 이름이 name으로 주어지고 생년월일이 birth로 주어질 경우

  만들어지는 아이디를 return하는 함수 solution을 완성하세요.

  **제한 사항**

  - name은 string타입으로 제공됩니다.
  - birth는 number타입으로 제공됩니다.
  - name의 길이는 20을 넘지 않습니다.
  - birth는 항상 6자리 숫자로 제공됩니다.
 */
function solution(name, birth) {
  return name + birth;
}

console.log(solution('marco', 970219)); // marco971204
console.log(solution('tomas', 991108)); // tomas991108
