import {persons} from './data.mjs';
/* forEach
  1. 용도 : 배열요소를 하나씩 처리
  2. 매개변수 : (요소,인덱스,배열자체)={ 요소처리 }
  3. 콜백함수의 반환값 : undefined 
  4. 고차함수 반환값 : undefined
*/
// console.log(persons);
// console.log(persons.data);
// console.log(persons['data']);

// const f = (person,idx,arr) => {
//   console.log(person.name, person.age);
// };
// persons.data.forEach(f);

persons.data.forEach(person => console.log(person.name, person.age));
