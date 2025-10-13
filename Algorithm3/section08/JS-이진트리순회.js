function solution() {
  // 트리 구조 정의 (객체 형태)
  const tree = {
    1: [2, 3],
    2: [4, 5],
    3: [6, 7],
    4: [],
    5: [],
    6: [],
    7: [],
  };

  // 결과 저장용 배열
  let preorder = [];
  let inorder = [];
  let postorder = [];

  // 전위순회 (Root -> Left -> Right)
  function DFS_pre(node) {
    if (!node) return;
    preorder.push(node);
    // console.log(`전위 : ${node}`);
    const [left, right] = tree[node];
    DFS_pre(left);
    DFS_pre(right);
  }

  // 중위순회 (Left -> Root -> Right)
  function DFS_in(node) {
    if (!node) return;
    const [left, right] = tree[node];
    DFS_in(left);
    inorder.push(node);
    // console.log(`중위 : ${node}`);
    DFS_in(right);
  }

  // 후위순회 (Left -> Right -> Root)
  function DFS_post(node) {
    if (!node) return;
    const [left, right] = tree[node];
    DFS_post(left);
    DFS_post(right);
    postorder.push(node);
    // console.log(`후위: ${node}`);
  }

  // 1번 루트부터 탐색 시작
  DFS_pre(1);
  DFS_in(1);
  DFS_post(1);

  console.log('====================');
  console.log('✅ 최종 순회 결과');
  console.log('전위순회:', preorder.join(' '));
  console.log('중위순회:', inorder.join(' '));
  console.log('후위순회:', postorder.join(' '));
  console.log('====================');

  // 객체 형태로도 반환 (테스트 용)
  return {
    전위순회: preorder.join(' '),
    중위순회: inorder.join(' '),
    후위순회: postorder.join(' '),
  };
}

console.log(solution());
