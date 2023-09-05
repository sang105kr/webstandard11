// spread 연산자  :   ...+이터러블객체 ex) [],set,map,NodeList,HtmlCollection..
//    이터러블객채의 요소를 목록으로
// 사용예 : 이터러블 객체를 배열로 만들때.
{
  const arr = [1,2,3];

  console.log(...arr); // 1 2 3

  const arr2 = [...arr]; // arr복사 [1,2,3]
  console.log(arr2);
}
// 배열 합치기
{
  const arr1 = [1,2,3];
  const arr2 = [4,5,6];
  console.log(arr1.concat(arr2)); //es5
  console.log( [...arr1, ...arr2]); [1,2,3,4,5,6]
}
