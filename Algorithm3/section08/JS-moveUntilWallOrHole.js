const gameMap = [
  ['#', '#', '#', '#', '#'],
  ['#', '.', '.', 'B', '#'],
  ['#', '.', '#', '.', '#'],
  ['#', 'R', 'O', '.', '#'],
  ['#', '#', '#', '#', '#'],
];

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

function moveUntilWallOrHole(r, c, diffR, diffC, gameMap) {
  let moveCount = 0;

  while (gameMap[r + diffR][c + diffC] !== '#' && gameMap[r][c] !== 'O') {
    r += diffR;
    c += diffC;
    moveCount += 1;
  }

  return [r, c, moveCount];
}

function isAvailableToTakeOutOnlyRedMarble(gameMap) {
  const n = gameMap.length;
  const m = gameMap[0].length;
  const visited = [];

  // Initialize 4D visited array
  for (let i = 0; i < n; i++) {
    visited[i] = [];
    for (let j = 0; j < m; j++) {
      visited[i][j] = [];
      for (let k = 0; k < n; k++) {
        visited[i][j][k] = [];
        for (let l = 0; l < m; l++) {
          visited[i][j][k][l] = false;
        }
      }
    }
  }

  const queue = [];
  let redRow = -1,
    redCol = -1,
    blueRow = -1,
    blueCol = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (gameMap[i][j] === 'R') {
        redRow = i;
        redCol = j;
      }
      if (gameMap[i][j] === 'B') {
        blueRow = i;
        blueCol = j;
      }
    }
  }

  queue.push([redRow, redCol, blueRow, blueCol, 1]);
  visited[redRow][redCol][blueRow][blueCol] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    redRow = current[0];
    redCol = current[1];
    blueRow = current[2];
    blueCol = current[3];
    const tryCount = current[4];

    if (tryCount > 10) {
      break;
    }

    for (let i = 0; i < 4; i++) {
      const redMove = moveUntilWallOrHole(
        redRow,
        redCol,
        dr[i],
        dc[i],
        gameMap
      );
      let nextRedRow = redMove[0];
      let nextRedCol = redMove[1];
      const redMoveCount = redMove[2];

      const blueMove = moveUntilWallOrHole(
        blueRow,
        blueCol,
        dr[i],
        dc[i],
        gameMap
      );
      let nextBlueRow = blueMove[0];
      let nextBlueCol = blueMove[1];
      const blueMoveCount = blueMove[2];

      if (gameMap[nextBlueRow][nextBlueCol] === 'O') {
        continue;
      }

      if (gameMap[nextRedRow][nextRedCol] === 'O') {
        return true;
      }

      if (nextRedRow === nextBlueRow && nextRedCol === nextBlueCol) {
        if (redMoveCount > blueMoveCount) {
          nextRedRow -= dr[i];
          nextRedCol -= dc[i];
        } else {
          nextBlueRow -= dr[i];
          nextBlueCol -= dc[i];
        }
      }

      if (!visited[nextRedRow][nextRedCol][nextBlueRow][nextBlueCol]) {
        visited[nextRedRow][nextRedCol][nextBlueRow][nextBlueCol] = true;
        queue.push([
          nextRedRow,
          nextRedCol,
          nextBlueRow,
          nextBlueCol,
          tryCount + 1,
        ]);
      }
    }
  }

  return false;
}

// Main execution
console.log(isAvailableToTakeOutOnlyRedMarble(gameMap)); // True 를 반환해야 합니다

const gameMap2 = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '.', 'O', '.', '.', '.', '.', 'R', 'B', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];
console.log(
  `정답 = false / 현재 풀이 값 = ${isAvailableToTakeOutOnlyRedMarble(gameMap2)}`
);

const gameMap3 = [
  ['#', '#', '#', '#', '#', '#', '#'],
  ['#', '.', '.', 'R', '#', 'B', '#'],
  ['#', '.', '#', '#', '#', '#', '#'],
  ['#', '.', '.', '.', '.', '.', '#'],
  ['#', '#', '#', '#', '#', '.', '#'],
  ['#', 'O', '.', '.', '.', '.', '#'],
  ['#', '#', '#', '#', '#', '#', '#'],
];
console.log(
  `정답 = true / 현재 풀이 값 = ${isAvailableToTakeOutOnlyRedMarble(gameMap3)}`
);
