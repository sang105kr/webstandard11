// 매개변수의 의미 (첫번째 : 요소의 값, 두번째: 요소의 인덱스, 세번째 : 원배열)
// 용도 : 배열의 요소중 조건에 해당하는 요소만 추출.
// 반환값 : 배열, 만족하는 요소가 없으면 빈배열
{
  const values = [1, 2, 3, 4, 5, 6];
  const result = values.filter(curr => curr % 2 == 1);
  console.log(result);
}
{
  const result = [];
  for(let i=0; i<values.length; i++){
    if(values[i] % 2 == 0) {
      result.push(values[i]);
    }
  }
}
