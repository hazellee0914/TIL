function solution(s) {
  return s.reduce((a, b) => (a.length >= b.length ? a : b));
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
