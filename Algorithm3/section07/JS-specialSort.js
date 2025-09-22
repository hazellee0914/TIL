function solution(arr1) {
  return arr1.filter((x) => x < 0).concat(arr1.filter((x) => x > 0));
}
let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr1));

function solution(arr) {
  // 음수는 앞으로, 양수는 뒤로
  let negatives = [];
  let positives = [];

  for (let x of arr) {
    if (x < 0) negatives.push(x);
    else positives.push(x);
  }

  return [...negatives, ...positives];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
