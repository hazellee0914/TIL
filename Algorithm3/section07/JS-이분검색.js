function solution(target, arr) {
  // 1. 배열 정렬
  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length - 1;

  // 2. 이분검색 시작
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (arr[mid] === target) {
      // 찾으면 위치(index + 1) 반환
      return mid + 1;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return -1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr)); // 👉 3
