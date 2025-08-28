function solution(test) {
  const M = test.length;
  const N = test[0].length;

  // 1. 학생 번호 배열 [1..N]
  const students = Array.from({ length: N }, (_, i) => i + 1);
  // console.log(students);

  // 2. (a, b) 모든 학생 쌍 만들기 (a !== b)
  const pairs = students.flatMap((a) =>
    students.filter((b) => b !== a).map((b) => [a, b])
  );
  // console.log(pairs);

  // 3. 쌍마다 "모든 시험에서 a가 b보다 앞인가?" 검사 후 합계 - (멘토, 멘티)
  return pairs.reduce((cnt, [a, b]) => {
    const ok = test.every((row) => row.indexOf(a) < row.indexOf(b));
    // console.log(`${a} vs ${b} => ${ok ? '가능' : '불가능'}`);
    return cnt + (ok ? 1 : 0);
  }, 0);
}

// 테스트
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr)); // 👉 3

//  function solution(test){
//               let res = 0;
//               let M = test.length;   // 시험 횟수
//               console.log(M);
//               let N = test[0].length;  //  학생 수
//               console.log(N);

//               // 모든 학생쌍 테스트
//               for(let a = 1; a <= N; a++){
//                 for(let b = 1; b <= N; b++){
//                   if(a === b) continue;   //  같은 학생이면 pass

//                   let cnt = 0;  // a가 b보다 앞선 횟수
//                   for(let k = 0; k < M; k++){
//                     let rankA = test[k].indexOf(a);  // k -> a 등수
//                     let rankB = test[k].indexOf(b) // k -> b 등수
//                     if(rankA < rankB) cnt++
//                   }

//                   if(cnt === M) res++;
//                 }
//               }
//               return res
//             }

//             let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
//             console.log(solution(arr));
