// 이터러블객체 : Symbol.iterator메소드를 가진 객체
//               Symbol.iterator메소드는 이터레이터 객체를 반환
// 이터레이터객체 : next메소드를 갖는 객체로 {value:값, done:boolean값}를 반환

// 피보나치순열 : 1,2,3,5,8,13....

const f = ()=>{

    let [pre,curr] = [0,1]; //배열 구조분해

    return {
      [Symbol.iterator]() {
        return this;  
      },
      next() {
        [pre,curr ]=[curr, pre + curr];
        return { value: curr, done:false   };
      }
    }
}
const iterable = f();
// for(let ele of iterable){
//   if(ele > 100) break;
//   console.log(ele);
// }

console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);

