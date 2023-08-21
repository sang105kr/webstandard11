/* 함수 선언문 */
function sum(x,y) {
  let sum = 0;
  sum = x + y;
  return sum;
}

let result = sum(10,20);
console.log('result=' + result);
/* 문자열 템플릿 */
console.log(`result=${result}`);