function solution(n) {
  // DFS() 함수 안에서 자기 자신을 계속 호출해서 1부터 N까지 출력
  // DFS(ㅣ) L은 현재 숫자 의미
  // 종료 조건 : L > n 되면 재귀 멈춰야 함
  // 재귀 호출 : DFS(L+1)로 다음 숫자 출력
  function DFS(L) {
    if (L > n) return;
    DFS(L + 1);
    console.log(L);
  }
  DFS(1);
}

solution(3);
