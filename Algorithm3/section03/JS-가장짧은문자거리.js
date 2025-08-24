function solution(s, t) {
  const n = s.length;
  const res = Array(n);
  let d = Infinity;

  for (let i = 0; i < n; i++) {
    d = s[i] === t ? 0 : d + 1;
    res[i] = d;
  }
  d = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    d = s[i] === t ? 0 : d + 1;
    res[i] = Math.min(res[i], d);
  }
  return res;
}
let str = 'teachermode';
console.log(solution(str, 'e'));

// function solution(s, t) {
//   // s = "t e ach e rmod e ", t = "e"
//   // t = 0 -> 1
//   // e = 1 => 0
//   // a = 2 => left 1 , right 5, dis 3 => min 1
//   // e = 5 => 0
//   // e = 10

//   let arr = Array.from(s);
//   console.log(arr);

//   // left -> right
//   let leftToRight = arr.reduce(
//     (acc, ch, i) => {
//       if (ch === t) acc.dist = 0;
//       else acc.dist++;
//       acc.res[i] = acc.dist;
//       return acc;
//     },
//     { dist: 1000, res: [] }
//   ).res;

//   let rightToLeft = arr.reduceRight(
//     (acc, ch, i) => {
//       if (ch === t) acc.dist = 0;
//       else acc.dist++;
//       acc.result[i] = Math.min(acc.result[i], acc.dist);
//       return acc;
//     },
//     { dist: 1000, result: [...leftToRight] } // 1차 결과 복사본으로 시작
//   ).result;

//   return rightToLeft;
// }

// let str = 'teachermode';
// console.log(solution(str, 'e'));
