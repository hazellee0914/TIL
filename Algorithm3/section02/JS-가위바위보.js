function solution(a, b) {
  // 1.가위 2.바위 3.보
  // 가위 1 > 보 3
  // 바위 2  > 1 가위
  // 보 3 > 바위 2
  // 같은 숫자면 무승부 D

  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      result.push('D'); // 무승부
    }
    // A가 이기는 경우
    else if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    ) {
      result.push('A');
    }
    // 그 외에는 B가 이김
    else {
      result.push('B');
    }
  }

  return result;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
