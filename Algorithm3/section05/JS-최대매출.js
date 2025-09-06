function solution(k, arr) {
  // 1. 처음 K일 합 구하기
  let sum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  // console.log(sum);
  let max = sum;

  // 2. 나머지 부분을 reduce로 처리 (
  arr.slice(k).reduce((_, cur, i) => {
    sum += cur - arr[i]; // 새로 들어온 값(cur) 더하고, 앞에서 빠질 값(arr[i]) 빼기
    if (sum > max) max = sum; // 최대값 갱신
    return sum; // reduce는 리턴이 필요하니까 sum 반환
  }, sum);

  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a)); // 👉 56

//  function solution(k, arr){
//              // k 일 매출 합
//              // 앞에 빠지고 새 값 들어와 더하기 방식
//              // 12 15 11 = 38
//              // 38 -12 +20 = 46
//              // 46 -15 +25 = 56

//              let n = arr.length;

//              // k일 합
//              let sum = 0;
//              for(let i = 0; i < k; i++){
// console.log(arr[i]);
//               sum += arr[i]
//             }

//             let max = sum;

//             for(let i = k; i < n; i++){
//               sum+= arr[i] - arr[i - k]
//               console.log(sum);
//               if(sum > max) max = sum;
//             }

//             return max;
//             }

//             let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
//             console.log(solution(3, a));
