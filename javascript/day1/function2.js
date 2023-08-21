/*1. 함수 선언문 */
{
  function sum(x,y){
    return x + y;
  }
  console.log(sum(10,20));
}
/*2. 함수 표현식 */
{
  const sum = function(x,y) {
    return x + y;
  }
  console.log(sum(10, 20));
}
/*3. 화살표 함수(람다 함수) : 함수표현식을 간단히 표현한 함수*/
{
  {
    const sum = (x,y) => {
      return x + y;
    }
    console.log(sum(10,20));
  }
  {
    // 화살표함수 본문에 실행문이 1개일 경우 {}중괄호 생략 가능
    // 실행문이 1개 일때 return문 생략 가능
    const sum = (x,y) => x + y;
    console.log(sum(10,20));
  }
}
