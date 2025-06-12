/**
 * 휴대폰 인증 번호를 1분 안에 입력해야 합니다.

1:00 부터 시작해서 1초씩 줄어드는 함수를 만들어주세요.
0:59 남았습니다.
0:58 남았습니다.
0:57 남았습니다.
...
 */

const startTimer = () => {
  let time = 60;

  let timer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${minutes}:${displaySeconds} 남았습니다.`);
    time--;
    if (time < 0) {
      clearInterval(timer);
      console.log('시간이 종료되었습닏.');
    }
  }, 1000);
};
startTimer();
