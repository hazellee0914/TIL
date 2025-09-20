function solution(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 두 값을 교환(swap)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr)); // [5, 7, 11, 13, 15, 23]

//  function solution(arr){
//   return arr.sort((a,b) => a - b)
//           }

//           let arr=[13, 5, 11, 7, 23, 15];
//           console.log(solution(arr));
