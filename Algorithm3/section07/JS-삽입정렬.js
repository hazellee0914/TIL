function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i]; // 현재 값
    let j;

    // console.log(`\n▶ i=${i}, tmp=${tmp}, 시작 배열:`, arr.slice());

    // 현재 값보다 큰 값은 오른쪽으로 이동
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
        // console.log(`  arr[${j + 1}] = ${arr[j]}  →`, arr.slice());
      } else {
        break;
      }
    }
    arr[j + 1] = tmp; // 자기 자리에 삽입
    // console.log(`  tmp(${tmp}) 삽입 →`, arr.slice());
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr)); // [5, 6, 7, 9, 10, 11]
