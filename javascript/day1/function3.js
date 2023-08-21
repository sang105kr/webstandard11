/* 임의의 정수 1개를 입력받아 3배수한 값을 반환하는 함수를 구현하시오. */
/* 함수 선언문 */
{

  //const calculateTreeTimes = x => x * 3;
  function calculateTreeTimes(x){
    return x * 3;
  }
  console.log(calculateTreeTimes(10));
}
/* 함수 표현식 */
{
  const calculateTreeTimes = function (x) {
    return x * 3;
  };
  console.log(calculateTreeTimes(10));
}
/* 화살표 함수 */
{
  { // function 키워드 생략, 매개변수와 본문사이에 => 추가
    const calculateTreeTimes = (x)=>{
      return x * 3;
    };
    console.log(calculateTreeTimes(10));
  } 
  {
    // 본문에 실행문이 1개면 중괄호 생략
    // 실행문이 1개에 return 키워드가 포함되어 있으면 생략
    const calculateTreeTimes = (x) => x * 3;
    console.log(calculateTreeTimes(10));
  }   
  {
    // 매개변수가 1개면 () 소괄호 생략 가능
    const calculateTreeTimes = x => x * 3;
    console.log(calculateTreeTimes(10));
  }    
}