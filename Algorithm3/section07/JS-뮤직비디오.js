function count(songs, capacity) {
  // 노래 순서 유지, 자를 수 없음
  // M개의 DVD 나눠 담는데, DVD용량 최소화
  // 모든 DVD 같은 크기
  // 최소 DVD 용량 -> 가장 긴 노래
  // 최대 DVD 용량 -> 모든 노래 합
  // capacity으로 노래를 담을 수 있는지 여부
  // 몇 장의 DVD 필요한지
  // M장 이하로 가능하면 용량 줄이고, 아니면 늘려야함

  let dvdCount = 1; // DVD 1장부터 시작
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      dvdCount++;
      sum = x; // 새로운 DVD 시작
    } else {
      sum += x;
    }
  }

  return dvdCount;
}

function solution(m, songs) {
  let lt = Math.max(...songs); // 가장 긴 노래
  // console.log(lt);
  let rt = songs.reduce((a, b) => a + b, 0); // 모든 노래 길이 합
  // console.log(rt);
  let res = 0;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (count(songs, mid) <= m) {
      res = mid; // 가능한 용량
      rt = mid - 1; // 더 작은 용량
    } else {
      lt = mid + 1; // 더 큰 용량 필요
    }
  }

  return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
