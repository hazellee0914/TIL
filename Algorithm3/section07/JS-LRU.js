function solution(size, arr) {
  //  Cache Hit (캐시에 이미 있음): 그 작업을 꺼내서 맨 앞으로 이동.
  // Cache Miss (캐시에 없음):
  // 캐시가 꽉 차면 맨 뒤(가장 오래 안 쓴 것)를 삭제.
  //새 작업을 맨 앞에 추가.

  let cache = [];

  for (let x of arr) {
    // 캐시에 있으면 기존 위치 제거
    let pos = cache.indexOf(x);
    if (pos !== -1) {
      cache.splice(pos, 1);
    }

    // 캐시에 없고, 공간이 가득 차 있으면 맨 뒤 제거
    else if (cache.length === size) {
      cache.pop();
    }

    // 새 작업을 맨 앞에 넣음
    cache.unshift(x);
  }

  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
