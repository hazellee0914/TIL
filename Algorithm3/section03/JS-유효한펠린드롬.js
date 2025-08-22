function solution(s) {
  // 문자열에 알파벳만 추출
  // 대소문자 구분 x
  // 앞뒤 읽으나 같으면 Yes, No

  let str = s.toLowerCase().replace(/[^a-z]/g, '');

  let reversed = str.split('').reverse().join('');

  if (str === reversed) return 'YES';
  else return 'NO';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
