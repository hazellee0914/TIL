function solution(arr) {
  // 9명의 키 합이  100
  const total = arr.reduce((a, b) => a + b);

  // 두명 제외 키 합
  const target = total - 100;

  // 두명의 arr 배열에서 제거
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return arr.filter((_, idx) => idx !== i && idx !== j);
      }
    }
  }
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
