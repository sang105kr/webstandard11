// input : 데이터, 함수

// 고차함수 : 함수를 매개값으로 받거나 함수를 반환하는 함수.
/* 콜백함수 : 고차함수에서 매개값으로 전달되는 함수, 고차함수 본문에서 호출되는 함수 */
/* 아래 예제코드에서 f가 콜백함수임 */
function f1(arr, f){
  let tmpArr = [];
  for(let i=0; i<arr.length; i++){
    tmpArr.push(f(arr[i]));
  }
  return tmpArry;
}

const f2 = x => x * 2;
const f3 = x => x + 10;

//let result = f1([1,2,3],f2);
let result = f1([1, 2, 3], x => x * 2);
console.log(result); /* 2,4,6 */

// result = f1([1,2,3],f3);
result = f1([1, 2, 3], x => x + 10);
console.log(result); /* 11,12,13 */