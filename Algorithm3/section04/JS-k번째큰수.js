function solution(n, k, card) {
  // 모든 3개 조합 만들기
  let sums = card.flatMap((a, i) =>
    card
      .slice(i + 1)
      .flatMap((b, j) => card.slice(i + j + 2).map((c) => a + b + c))
  );

  // 중복 제거 후 정렬
  let sorted = [...new Set(sums)].sort((a, b) => b - a);

  return sorted[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr)); // 143

// function solution(n, k, card){
//  // 3장 카드 합
//  // 그 합의 내림차순
//  // 중복 제거 -> k번째 큰 값

//  let sums = new Set;

//  for(let i = 0; i < n; i++){
//   for(let j = i + 1; j < n; j++){
//     for(let l = j + 1; l < n; l++){
//       sums.add(card[i] + card[j] + card[l])
//     }
//   }
//  }

//  let sorted = Array.from(sums).sort((a,b) => b - a)

//  return sorted[k - 1]
// }

// let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));
