/* 배열 [] */
{
  const arr = [];           //빈 배열객체 생성
  console.log(arr.length);
  console.log([].length);

  //
  arr.push(1,'hi',true);
  console.log(arr.length);
  console.log(arr);
}
{
  const arr = new Array(); //빈 배열객체 생성
  console.log(arr.length);
  console.log(new Array().length);

  arr.push(1, 'hi', true);
  console.log(arr.length);
  console.log(arr);
}
{
  const arr = [1,2,3,4,5];

  let returnValue = arr.splice(2,1);
  console.log(returnValue);
  console.log(arr)

  returnValue = arr.splice(2, 0, 'a', 'b');
  console.log(returnValue);
  console.log(arr);
}
{
  const arr = [1,2,3,4,5];
  arr.splice(3,1,'a','b'); 
  console.log(arr);
}