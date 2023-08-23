/* 고차함수 : 매개값이 함수이거나 반환값이 함수인 함수 */
/* 콜백함수 : 고차함수에서 매개값으로 전달되는 함수, 고차함수 본문에서 호출되는 함수 */
{
  function f2(x){
    return x * 2;
  }
  function f3(x){
    return x * 3;
  }
  function f4(x){
    return x * 4;
  }
}

// function times(y) {
//   return function(x){
//     return x * y;
//   };
// }

const times = y => x => x * y;

const f2 = times(2); //2배수 함수//
console.log(f2(10)); //20

const f3 = times(3); //3배수 함수//
console.log(f3(10)); //30

const f4 = times(4); //4배수 함수
console.log(f4(10)); //40