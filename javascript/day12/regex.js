// 정규표현식 만드는 방법
// 1. /패턴/옵션
// 2. RgeExp(/패턴/,옵션)
{
const target = 'Is this all there is?';
const regex = /th/;

const arr = regex.exec(target); //첫번째 매칭 결과만 배열로 반환, 없으면 null
console.log(arr);

const flag = regex.test(target); //매칭된 결과가 존재하면 true, 없으면 false 반환
console.log(flag);
}
{
const target = 'Is this all there is?';
const regex = RegExp(/th/);

const arr = regex.exec(target); //첫번째 매칭 결과만 배열로 반환, 없으면 null
console.log(arr);

const flag = regex.test(target); //매칭된 결과가 존재하면 true, 없으면 false 반환
console.log(flag);
}
{
  const tel = '010-1234-5678';
  const pattern = /^\d{3}-\d{4}-\d{4}$/;
  console.log(pattern.test(tel));
}