/**
 * 오른쪽 stringData 배열에는 오직 string 타입의 데이터만 있어야 합니다. 

그런데 누군가의 실수로 다른 타입의 값들도 배열 안에 있습니다.

모든 데이터들을 string으로 변환해주세요.
console.log(stringData) //
["1", "가나", "true", "126", "false"]
 */

let stringData = [1, '가나', true, 126, 'false'];

stringData = stringData.map((item) => String(item));
console.log(stringData);
