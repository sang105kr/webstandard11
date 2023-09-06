// 호이스팅 : 함수선언문 또는 var 전역변수 를 실행전에 위로 끌어올려 실행하는 개념.
// {
//   console.log(sum(10,20));

//   // 함수 선언문
//   function sum(x,y) {
//     return x + y;
//   }

//   console.log(sum(30, 40));
// }
{// 함수 표현식은 호이스팅이 안되므로 사용전에 정의되어야함.
  console.log(sum(10, 20));
  
  // 함수 표현식
  const sum = function (x, y) {
    return x + y;
  }

  console.log(sum(30, 40));
}

