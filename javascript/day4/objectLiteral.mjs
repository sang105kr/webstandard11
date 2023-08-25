// { 프로퍼티키 : 프로퍼티값, ... }
const person = {};

// 프로퍼티 추가
person.name = '홍길동';
person.age = 30;

console.log(person); //{ name: '홍길동', age: 30 }

// 프로퍼티 삭제
delete(person.name);
console.log(person); //{ name: '홍길동'}


// 프로퍼티 수정
person.age = 20;
console.log(person); //{ age:20}

person['1'] = 5;    // { age:20 , '1':5}
console.log(person);
