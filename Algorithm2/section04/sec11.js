/**
 * random 객체를 이용하여 1~100까지 무작위 숫자가 나오도록 하여

    number과 비교해야 합니다.

    number보다 큰 수면 Win, 작은 수면 Lose라는 문구를 띄워주세요.
 */

function random() {
  let number = 50;
  let random = Math.random() * 100;

  if (random >= number) {
    console.log('Win');
  } else {
    console.log('Lose');
  }
}

random();
random();
random();
