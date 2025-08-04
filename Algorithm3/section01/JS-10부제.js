function solution(day, arr) {
  return arr.filter((num) => num % 10 === day).length;
}
//   function solution(day, arr){
//    let count = 0;
//    for(let num of arr){
//     let lastDigist = num % 10;
//     if(lastDigist === day){
//       count++
//     }
//    }
// return count

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
