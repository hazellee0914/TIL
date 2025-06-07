/**
 * 오른쪽 fruits 과일의 인기 순위를 나타내고 있습니다.

현재 10위까지 정보를 담고 있지만,

3위까지 나타내어 "현재 인기 "0" 위 과일은 "000" 입니다. 라는 문구를 나타내고 싶습니다.

현재 1위 과일은 레드향입니다.
현재 2위 과일은 샤인머스켓입니다.
현재 3위 과일은 산청딸기입니다.
 */
const fruits = [
  { number: 1, title: '레드향' },
  { number: 2, title: '샤인머스켓' },
  { number: 3, title: '산청딸기' },
  { number: 4, title: '한라봉' },
  { number: 5, title: '사과' },
  { number: 6, title: '애플망고' },
  { number: 7, title: '딸기' },
  { number: 8, title: '천혜향' },
  { number: 9, title: '과일선물세트' },
  { number: 10, title: '귤' },
];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].number < 4) {
    console.log(
      '현재 인기' + fruits[i].number + '위 과일은' + fruits[i].title
    ) + '입니다.';
  }
}
