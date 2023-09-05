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

const keys = Object.keys(person); // 프로퍼티 키를 배열로 반환
console.log(keys);

keys.forEach(key=>console.log(person[key]));

const values = Object.values(person); // 프로퍼티 값을 배열로 반환
console.log(values);