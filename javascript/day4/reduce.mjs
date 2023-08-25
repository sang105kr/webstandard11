import { persons } from './data.mjs';
/* reduce
  1. 용도 : 배열요소를 순회하면서 누적계산된 단일값을 얻고자할때.
  2. 매개변수 : (누적값, 요소,인덱스,배열자체)={ 누적계산 } ,[초기값]
  3. 콜백함수의 반환값 : 누적값
  4. 고차함수 반환값 : 누적계산된 단일값

*/

const data = [1,2,3];  //6

//case1) 초기값 없는경우
console.log(data.reduce((acc,curr)=>{return acc * curr}));
// 1회차 - acc:1 curr:2  result:2
// 2회차 - acc:2 curr:3  reuslt:6

//case2) 초기값이 있는경우
console.log(data.reduce((acc,curr)=>{return acc * curr},1));
// 1회차 - acc:1 curr:1  result:1
// 2회차 - acc:1 curr:2  reuslt:2
// 3회차 - acc:2 curr:3  reuslt:6

//문제1) 점수의 총합을 구하시오.
//case1)
const result = 
persons.data.map(person=>person.score) // [80,90,100]
            .reduce((acc,score,idx)=> acc + score );

//1회차 - acc:80 score:90 result:170
//2회차 - acc:170 score:100 result 270            
console.log(result);

//case2)
let value = persons.data.reduce((acc,person)=>{
                if(typeof(acc) == 'object') {
                  return acc.score + person.score;
                }else {
                  return acc + person.score;
                }
            });
console.log(value);
// 1회차 - acc : { name: '홍길동', age: 30, gender: '남', score: 80 }
//         person : { name: '홍길남', age: 10, gender: '남', score: 90, }
//         result : 170          

// 2회차 - acc : 170
//         person : { name: '홍길서', age: 20, gender: '여', score: 100, },
//         result : 270

// 최종결과 270

//case2)
value = persons.data.reduce((acc,person) => acc + person.score,0);
console.log(value);