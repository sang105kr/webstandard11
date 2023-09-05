const person = {
  name: '홍길동',
  age: 30,
  blood: 'A',
  gender: '남',
};

// in 연산자 : 객체내에 특정 프로퍼티 유무확인
console.log('gender' in person); // true

// 이터러블 객체인지 판단
console.log(Symbol.iterator in person);
console.log(Symbol.iterator in []); // true
console.log(Symbol.iterator in {}); // false
console.log(Symbol.iterator in new Set()); //true
console.log(Symbol.iterator in new Map()); //true