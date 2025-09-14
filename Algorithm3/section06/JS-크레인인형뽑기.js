function solution(board, moves) {
  let basket = [];
  let answer = 0;

  for (let move of moves) {
    let col = move - 1; // 인덱스 보정

    for (let row = 0; row < board.length; row++) {
      if (board[row][col] !== 0) {
        // 인형 발견
        let doll = board[row][col];
        board[row][col] = 0; // 뽑았으니 빈칸 처리

        // console.log(`move=${move}, 뽑은 인형=${doll}`);

        if (basket.length > 0 && basket[basket.length - 1] === doll) {
          basket.pop(); // 같은 인형 터짐
          answer += 2; // 점수 +2
          // console.log(`같은 인형 터짐! 현재 점수=${answer}`);
        } else {
          basket.push(doll);
        }

        // console.log(`현재 basket = [${basket.join(", ")}]`);
        // console.log("-----------------------");
        break; // 한 move에서 한 번만 집음
      }
    }
  }
  return answer;
}

// 테스트
let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log('최종 점수 =', solution(a, b));
