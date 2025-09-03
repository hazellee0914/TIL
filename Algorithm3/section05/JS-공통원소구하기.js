function solution(arr1, arr2) {
  let setA = new Set(arr1);

  return arr2.filter((num) => setA.has(num)).sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// function solution(arr1, arr2) {
//   // 오름 차순
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);

//   const res = [];
//   let p1 = 0,
//     p2 = 0;
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] === arr2[p2]) {
//       res.push(arr1[p1]);
//       p1++;
//       p2++;
//     } else if (arr1[p1] < arr2[p2]) {
//       p1++;
//     } else {
//       p2++;
//     }
//   }
//   return res;
// }

// let a = [1, 3, 9, 5, 2];
// let b = [3, 2, 5, 7, 8];
// console.log(solution(a, b));
