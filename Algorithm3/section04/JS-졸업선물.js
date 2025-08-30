function solution(m, product) {
  const totalCost = product.map(([p, s]) => p + s);

  // 결과 저장 배열 (표로 찍기용)
  let results = [];

  const maxCount = product
    .map(([price, ship], i) => {
      const discounted = price / 2 + ship;
      let budget = m - discounted;

      let row = {
        '쿠폰 학생': i + 1,
        상품가격: price,
        배송비: ship,
        '할인 후 비용': discounted,
        '시작 예산': m,
        '남은 예산': budget,
        '최대 학생 수': 0,
      };

      if (budget < 0) {
        row['최대 학생 수'] = 0;
        results.push(row);
        return 0;
      }

      const others = totalCost
        .filter((_, idx) => idx !== i)
        .sort((a, b) => a - b);

      const result = others.reduce(
        (acc, cost) => {
          if (acc.budget >= cost) {
            acc.budget -= cost;
            acc.cnt++;
          }
          return acc;
        },
        { budget, cnt: 1 } // 쿠폰 쓴 학생 1명 포함
      );

      row['남은 예산'] = result.budget;
      row['최대 학생 수'] = result.cnt;
      results.push(row);

      return result.cnt;
    })
    .reduce((max, cur) => Math.max(max, cur), 0);

  console.table(results);
  return maxCount;
}

// 테스트
let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log('👉 최종 답:', solution(28, arr));

// function solution(m, product) {
//   let n = product.length;
//   let answer = 0;

//   // 1. 각 학생별 기본 비용 계산
//   let totalCost = product.map(([price, ship]) => price + ship);

//   // 2. 모든 학생을 기준으로 쿠폰사용시
//   for (let i = 0; i < n; i++) {
//     let budget = m;
//     let count = 1;
//     // 쿠폰 적용 비용
//     let discounted = product[i][0] / 2 + product[i][1];
//     budget -= discounted;

//     if (budget < 0) continue; // 예산 부족하면 불가능

//     // 3. 나머지 학생들은 정가 오름차순 정렬
//     let others = [...totalCost];
//     others.splice(i, 1); // 쿠폰 쓴 학생 제외
//     others.sort((a, b) => a - b);

//     // 4. 예산 허용하는 만큼 구매
//     for (let cost of others) {
//       if (budget >= cost) {
//         budget -= cost;
//         count++;
//       } else break;
//     }

//     // 5. 최대 학생 수 갱신
//     answer = Math.max(answer, count);
//   }

//   return answer;
// }

// let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
// console.log(solution(28, arr)); // 👉 4
