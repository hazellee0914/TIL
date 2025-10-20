function solution(n, m) {
  // 중복 허용 같은 숫자 여러번 선택
  // level이 M이 되면 하나의 완성된 경우수 출력
  let res = [];
  let tmp = Array.from({ length: m }, () => 0); // 길이 m짜리 배열

  function DFS(L) {
    if (L === m) {
      // 깊이가 M이면 하나의 조합 완성
      res.push(tmp.slice()); // 깊은 복사
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i; // L번째 자리에 i를 넣기
        DFS(L + 1); // 다음 자리로 이동
      }
    }
  }
  DFS(0);
  return res;
}

console.log(solution(3, 2));
