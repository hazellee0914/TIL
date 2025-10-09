let input = 100;

const memo = new Map();
memo.set(1, 1);
memo.set(2, 1);

// 1. 메모에 이미 해당 값이 있으면 반환한다.
// 2. 만약 없다면, 그 값을 피보나치를 통해 구하고 메모에 저장한다.
function fiboDynamicProgramming(n, fiboMemo) {
  if (fiboMemo.has(n)) {
    return fiboMemo.get(n);
  }

  const nthFibo =
    fiboDynamicProgramming(n - 1, fiboMemo) +
    fiboDynamicProgramming(n - 2, fiboMemo);
  fiboMemo.set(n, nthFibo);

  return nthFibo;
}

// Main execution
console.log(fiboDynamicProgramming(input, memo));
