import { persons } from './data.mjs';
/* find <-> findLast
  1. 용도 : 배열의 찾고자 요소 하나만 추출하고자 할때 
  2. 매개변수 : (요소,인덱스,배열자체)={ 검색조건 }
  3. 콜백함수의 반환값 : 논리형 (찾고 하고자하는 조건이 참)
  4. 고차함수 반환값 : 첫번째로 찾은 요소
*/


//문제) 처음으로 점수가 90이상인 사람의 이름
{
  const findedPerson = persons.data.find(person => person.score >= 90);
  console.log(findedPerson['name']);
}
//문제) 마지막으로 점수가 90이상인 사람의 이름
{
  const findedPerson = persons.data.findLast(person => person.score >= 90);
  console.log(findedPerson['name']);
}
