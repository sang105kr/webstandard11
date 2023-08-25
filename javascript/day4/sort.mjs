import { persons } from './data.mjs';
/* sort
  1. 용도 : 배열 요소를 오름차순 또는 내림차순으로 정렬
  2. 매개변수 : (요소,인덱스,배열자체)={ 정렬조건 }
  3. 콜백함수의 반환값 : 음수(오름차순), 0 , 양수(내림차순)
  4. 고차함수 반환값 : 새로이 정렬된 배열
*/

const data = [11, 3, 2, 5, 10];
// 2번째로 큰 수는?
console.log(data.sort((a, b) => a - b)[0]);

//문제) 이름을 오름차순으로 출력
const result = persons.data.sort( (p1,p2)=> {
  if( p1.name > p2.name ) {
    return 1;
  }else if( p1.name < p2.name ) {
    return -1;
  }else {
    return 0;
  }
});
console.log(result);

//문제) 나이 오름차순으로 출력
const result2 = persons.data.sort( (p1,p2)=> p1.age-p2.age);
console.log(result2);

//문제) 점수가 가장 높은 사람의 이름
const ascending = persons.data.sort((p1, p2) => p1.score - p2.score);
console.log(ascending[ascending.length-1]['name']);

console.log(persons.data.sort((p1, p2) => p1.score - p2.score)[ascending.length - 1]['name']);