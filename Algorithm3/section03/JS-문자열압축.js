function solution(s) {
  const { result, count, prev } = s.split('').reduce(
    (acc, cur, i) => {
      console.log(
        `[i=${i}] cur=${cur}, prev=${acc.prev}, count=${acc.count}, result=${acc.result}`
      );

      if (cur === acc.prev) {
        acc.count++;
        console.log(`  같음 → count=${acc.count}`);
      } else {
        if (acc.prev) {
          acc.result += acc.prev + (acc.count > 1 ? acc.count : '');
          console.log(`  다름 → result에 추가: ${acc.result}`);
        }
        acc.prev = cur;
        acc.count = 1;
        console.log(`  새 그룹 시작 → prev=${acc.prev}, count=${acc.count}`);
      }
      return acc;
    },
    { result: '', count: 0, prev: '' }
  );

  const final = result + prev + (count > 1 ? count : '');
  console.log(`마지막 그룹 추가 → 최종: ${final}`);
  return final;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str)); // K2HS7E

// function solution(s){
//           // K2HS7E
//           // 순회 -> count
//            let res = ""
//            let count = 1;

//            for(let i = 0; i < s.length; i++){
//              console.log("현재 문자:", s[i], "다음 문자:", s[i + 1], "count:", count);
//             if(s[i] === s[i + 1]){
//               // 문자랑 같으면 count 증가
//               count++
//                     console.log("같음 → count 증가:", count);

//             } else {
//               // 다르면
//               res += s[i]
//               if(count > 1) res += count;
//             console.log(" → 다름, res:", res, "count:", count);

//               count = 1
//             }
//            }
//            return res
//         }

//         let str="KKHSSSSSSSE";
//         console.log(solution(str));
