/**
 * 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.

  반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

countLetter("I am from Korea")
countLetter("A day without laughter is a day wasted.") 
 */

function countLetter(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      count++;
    }
  }
  return count;
}

console.log(countLetter('I am from Korea'));
console.log(countLetter('A day without laughter is a day wasted.'));
