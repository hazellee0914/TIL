function solution(str1, str2) {
  if (str1.length !== str2.length) return 'NO'; // 길이 다르면 아나그램 불가능

  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2 ? 'YES' : 'NO';
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b)); // YES

// function solution(str1, str2){
// if(str1.length !== str2.length) return "NO"     // 길이 다르면

// let map = new Map();

// // 첫번째 문자열 문자 개수
// for(let x of str1){
//   map.set(x, (map.get(x) || 0) + 1)
// }

// // 두번째 문자열 돌면서 개수 줄이기
// for(let x of str2){
//   if(!map.has(x) || map.get(x) === 0){
//     return "NO"   // 없거나 초과시 아나그램 x
//   }

//   map.set(x, map.get(x) - 1)
// }
// return "YES"
// }

// let a="AbaAeCe";
// let b="baeeACA";
// console.log(solution(a, b));
