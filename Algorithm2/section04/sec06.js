/**
 * 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.

  num은 1이상의 자연수가 들어옵니다.

  만약 num이 5라면 1 + 2 + 3 + 4 + 5를 구해야 합니다.
 */

function sum(num) {
  const res = (num * (num + 1)) / 2;
  console.log(res);

  // let res = 0;

  // for (let i = 0; i <= num; i++) {
  //   res = res + i;
  // }
  // console.log(res);
}

sum(6);
sum(3);
