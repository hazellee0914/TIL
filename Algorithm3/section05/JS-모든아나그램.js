// T문자열 빈도수
// s문자열에서 길이가 t와 같은 윈도우를 왼 -> 오 한칸씩 이동
// 두 맵이 같으면 ++
// 새 윈도우가 이동시 앞글자 빼고, 새글자 추가 업뎃

function solution(s, t) {
  let res = 0;
  let len = t.length;

  // T 문자열정렬
  let sortedT = t.split('').sort().join('');
  console.log(sortedT);

  // s에서 길이가 len이 부분문자열을 하나씩 체크
  for (let i = 0; i <= s.length - len; i++) {
    let sub = s.substring(i, i + len);
    console.log(sub);
    let sortedSub = sub.split('').sort().join('');
    console.log(sortedSub);
    if (sortedSub === sortedT) res++;
  }
  return res;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
