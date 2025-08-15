function solution(arr) {
  // 맨 앞에 있는 학생보다 키가 클때만 보임
  let count = 1; // 맨 앞 학생 무조건 보임
  let max = arr[0]; // 현재 큰 키

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      count++;
      max = arr[i];
    }
  }
  return count;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
