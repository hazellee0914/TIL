/**
   * new Date()를 이용하여 
   * "오늘은 0000년 00월 00일 입니다." 라는 문구를

  만들어 보세요.
 */

let curDate = new Date();

console.log(
  `오늘은 ${curDate.getFullYear()}년 ${curDate.getMonth()}월 ${curDate.getDate()}일 입니다.`
);
