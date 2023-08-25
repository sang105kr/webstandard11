import { persons } from './data.mjs';
/* map
  1. 용도 : 배열요소를 1:1 or 1:n으로 치환 한뒤 새로운 배열로 반환
  2. 매개변수 : (요소,인덱스,배열자체)={ 요소치환 }
  3. 콜백함수의 반환값 : 치환한 값
  4. 고차함수 반환값 : 치환결과 새로운 배열
*/

// const f = (person,idx,arr) => {
//   return person.name;
// }

const f = person => person.name;
const result = persons.data.map(f);
console.log(result);