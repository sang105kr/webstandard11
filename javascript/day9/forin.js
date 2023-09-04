const person = {
  name:'홍길동',
  age:30,
  blood: 'A',
  gender: '남'
}
// for~in : 객체 리터럴의 프로퍼티를 순회하면서 프로퍼티키 접근하기

for(let prop in person) {
  console.log(prop);
}