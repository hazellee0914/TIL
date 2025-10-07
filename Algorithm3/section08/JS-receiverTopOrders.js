function main() {
  let top_heights = [6, 9, 5, 7, 4];

  console.log(getReceiverTopOrders(top_heights)); // [0, 0, 2, 2, 4] 가 반환되어야 한다!

  console.log('정답 = [0, 0, 2, 2, 4] / 현재 풀이 값 = ');
  console.log(getReceiverTopOrders([6, 9, 5, 7, 4]));

  console.log('정답 = [0, 0, 2, 3, 3, 3, 6] / 현재 풀이 값 = ');
  console.log(getReceiverTopOrders([3, 9, 9, 3, 5, 7, 2]));

  console.log('정답 = [0, 0, 2, 0, 0, 5, 6] / 현재 풀이 값 = ');
  console.log(getReceiverTopOrders([1, 5, 3, 6, 7, 6, 5]));
}

function getReceiverTopOrders(heights) {
  let answer = new Array(heights.length).fill(0);
  let heightsStack = [];

  // Push all heights to stack
  for (let height of heights) {
    heightsStack.push(height);
  }

  // O(N)
  while (heightsStack.length > 0) {
    // 해당 stack 이 비어있지 않다면 계속 반복해라.
    let height = heightsStack.pop(); // 4
    let currentIndex = heightsStack.length;

    for (let i = currentIndex - 1; i >= 0; i--) {
      // O(N)
      if (height <= heights[i]) {
        answer[currentIndex] = i + 1;
        break;
      }
    }
  }

  return answer;
}

// Run the main function
main();
