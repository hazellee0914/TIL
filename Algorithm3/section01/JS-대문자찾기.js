function solution(s) {
  return s.split('').filter((ch) => ch >= 'A' && ch <= 'Z').length;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
