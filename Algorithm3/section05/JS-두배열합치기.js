function solution(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
// 👉 [1, 2, 3, 3, 5, 6, 7, 9]

// function solution(arr1, arr2){
// let n = arr1.length;
// let m = arr2.length;
// let p1= 0, p2 =0;
// let res = []

// while(p1 < n && p2 < m){
//   if(arr1[p1] <= arr2[p2]){
//     res.push(arr1[p1])
//     p1++;
//   } else {
//     res.push(arr2[p2])
//     p2++;
//   }
// }

// while (p1 < n) res.push(arr1[p1++]);
// while(p2 < m) res.push(arr2[p2++])
//  return res;
// }

// let a=[1, 3, 5];
// let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));
