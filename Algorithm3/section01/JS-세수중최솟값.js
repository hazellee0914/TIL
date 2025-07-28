function solution(a, b, c) {
  let answer;
  if (a >= b && a <= c) {
    answer = a;
  } else if (b >= answer && b >= c) {
    answer = b;
  } else {
    answer = c;
  }
  return answer;
}

console.log(solution(2, 5, 1));
