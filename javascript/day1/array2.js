// const arr = [1,2,3,4,5];
// const arr2 = [];
// for(let i=0; i < arr.length; i++){
//   arr2.push(arr[i] * 2);
// }
// console.log(arr2);
/* 정수요소를 갖는 배열을 매개값으로 받아 각 요소를 2배수한 배열로 반환하는 함수를 구현하시오 */
/* 함수 선언문 */
{
  function arrayTwoTimes(arr) {
    let tmpArr = [];
    for(let i=0; i<arr.length; i++){
      tmpArr.push(arr[i] * 2);
    }
    return tmpArr;
  }
  console.log(arrayTwoTimes([1,2,3,4,5]));

}
/* 함수 표현식 */
{
  const arrayTwoTimes = function(arr) {
    let tmpArr = [];
    for (let i = 0; i < arr.length; i++) {
      tmpArr.push(arr[i] * 2);
    }
    return tmpArr;
  }
  console.log(arrayTwoTimes([1, 2, 3, 4, 5]));

}
/* 화살표 함수 */
{
  const arrayTwoTimes = arr => {
    let tmpArr = [];
    for (let i = 0; i < arr.length; i++) {
      tmpArr.push(arr[i] * 2);
    }
    return tmpArr;
  };
  console.log(arrayTwoTimes([1, 2, 3, 4, 5]));
}