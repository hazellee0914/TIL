function solution(arr) {
  // 키순으로 정렬 1번부터
  // 현수 > 짝꿍 => 현수 앞으로 바꿈
  // 정렬된 배열과 실제 배열 비교

  // 정렬된 키 배열 복사
  let sorted = [...arr].sort((a, b) => a - b);

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i]) {
      res.push(i + 1); // 번호는 1부터 시작
    }
  }
  return res;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr)); // [3, 8]
