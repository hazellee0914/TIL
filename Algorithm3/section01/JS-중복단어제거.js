function solution(s) {
  return s.filter((item, idx) => s.indexOf(item) === idx);
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
