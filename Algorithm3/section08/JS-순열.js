function solution(m, arr) {
  let n = arr.length;
  let result = [];
  let temp = Array(m).fill(0);
  let visited = Array(n).fill(false);

  function DFS(L) {
    if (L === m) {
      result.push(temp.slice()); // 깊은 복사
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = true;
          temp[L] = arr[i];
          DFS(L + 1);
          visited[i] = false;
        }
      }
    }
  }

  DFS(0);
  result.sort((a, b) => {
    // 사전순 정렬
    for (let i = 0; i < m; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });

  result.forEach((el) => console.log(el.join(' ')));
  // console.log(result.length); // 총 경우의 수

  return result.length;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

// function solution(m, arr){
//     let answer=[];
//     n=arr.length;
//     let ch=Array.from({length:n}, ()=>0);
//     let tmp=Array.from({length:m}, ()=>0);;
//     function DFS(L){
//         if(L===m){
//             answer.push(tmp.slice());
//         }
//         else{
//             for(let i=0; i<n; i++){
//                 if(ch[i]===0){
//                     ch[i]=1;
//                     tmp[L]=arr[i];
//                     DFS(L+1);
//                     ch[i]=0;
//                 }
//             }
//         }
//     }
//     DFS(0);
//     return answer;
// }

// let arr=[3, 6, 9];
// console.log(solution(2, arr));
