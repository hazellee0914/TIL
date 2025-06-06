/**
 * **`문제 설명`**
  학생들의 이름이 담긴 students 배열이 있습니다.
  배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.

  **`입력 인자`**
  - X

  **`주의 사항`**
  - slice 기능을 이용해서 문제를 풀어야 합니다.
  - 새로운 배열을 선언, 할당해야 합니다.
  - 배열의 인덱스는 0부터 시작합니다.
  console.log(newArr) // ["철수", "영희", "훈이"]
 */

let students = ['철수', '영희', '훈이', '짱구', '유리'];

let newArr = [];

console.log(newArr.push(students.slice(0, 3)));
console.log(newArr);
