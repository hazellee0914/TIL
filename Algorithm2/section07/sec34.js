/**
 * # 지금 이 순간부터 둘은 하나가 되었습니다

원두는 미국에서 개발자로 일하고 있는 외국인 친구의 결혼식에 참석했습니다.

주변 친구들과 이야기해보니,

서양에서는 결혼 후 남편의 성을 따르는 문화가 있다고 합니다.

미국에서는 여성의 70%가 결혼 후 남편 성을 따르고 있고,

영국에서는 무려 90%의 비율이 남편의 성을 따르고 있다는 것을 알게 되었습니다.

예를 들어, Harrison Ford와 Calista Flockhart가 결혼하면 Calista의 full name은 Calista Ford가 됩니다.

원두는 결혼 후 친구의 이름이 어떻게 바뀔지 궁금해져서,

결혼 후 가지게 될 full name을 알아보는 프로그램을 만들어보기로 했습니다.

나의 이름 name과 성별 sex, 배우자의 이름 spouse가 매개 변수로 주어질 때,

이름이 바뀐다면 **“결혼 후 당신의 full name은 Calista Ford입니다”**를 return 하고,

바뀌지 않는다면 **“결혼 후 당신의 full name은 바뀌지 않습니다”**를 return 하는 solution 함수를 완성해주세요.

**제한 사항**

- name과 spouse는 영문 알파벳으로만 이루어져 있습니다.
- name과 spouse에 middle name이 포함되는 경우는 없습니다.
- sex는 male, female로만 주어지는 문자열입니다.
 */

function solution(name, sex, spouse) {
  if (sex === 'male') return '“결혼 후 당신의 full name은 바뀌지 않습니다';

  const firstName = name.split(' ')[0];
  const lastName = spouse.split(' ')[1];

  return `결혼 후 당신의 full name은 ${firstName} ${lastName}`;
}

console.log(solution('Harrison Ford', 'male', 'Calista Flockhart'));
// "결혼 후 당신의 full name은 바뀌지 않습니다"
console.log(solution('Calista Flockhart', 'female', 'Harrison Ford'));
// "결혼 후 당신의 full name은 Calista Ford입니다"
