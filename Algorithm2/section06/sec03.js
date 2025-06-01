/**
 * 오른쪽에 주어진 movies는 영화에 대한 정보가 담긴 배열 속 객체 입니다.

  해당 조건에 맞는 영화들의 목록을 만들어 주세요.

  1. 장르가 "액션"인 영화 
  2. 상영관이 "cgv"인 영화
  3. 장르가 "로맨스"면서 상영관이 "cgv"인 영화
 */
let movies = [
  { title: '킹스맨', genre: '액션', 상영관: '메가박스' },
  { title: '러브레터', genre: '로맨스', 상영관: 'cgv' },
  { title: '스폰지밥', genre: '코미디', 상영관: '메가박스' },
  { title: '노트북', genre: '드라마', 상영관: 'cgv' },
  { title: '임파서블', genre: '액션', 상영관: 'cgv' },
  { title: '파리의 인어', genre: '로맨스', 상영관: '메가박스' },
  { title: '심슨', genre: '코미디', 상영관: '메가박스' },
  { title: '포레스트 검프', genre: '드라마', 상영관: 'cgv' },
];

let action = movies.filter((data) => data.genre === '액션');
console.log(action);
let cgv = movies.filter((data) => data.상영관 === 'cgv');
console.log(cgv);
let romance = movies.filter((data) => data.genre === '로맨스');
console.log(romance);

const filterMovies = (genre, theater) => {
  return movies.filter((movie) => {
    return (
      (!genre || movie.genre === genre) &&
      (!theater || movie.상영관 === theater)
    );
  });
};

const actionMovies = filterMovies('액션');
console.log('액션영화', actionMovies);

const cgvMovies = filterMovies(null, 'cgv');
console.log('cgvMovies', cgvMovies);

const romanceMovies = filterMovies('로맨스');
console.log('로맨스', romanceMovies);
