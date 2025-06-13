/**
 *   게시글을 올린 시간이 있습니다. 

현재 날짜로부터 며칠이 지났는지 보여주는 문구를 만들어야 합니다.

3일이 지났습니다.
5일이 지났습니다.
 */

let post = '2021년 05월 02일';

let newPost = new Date(
  post.replace('년 ', '-').replace('월 ', '-').replace('일', '')
);
console.log(newPost);

let currentDate = new Date();
console.log(currentDate);

let diffTime = currentDate - newPost;
console.log(diffTime);

let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

console.log(diffDays);
console.log(`${diffDays}일이 지났습니다.`);
