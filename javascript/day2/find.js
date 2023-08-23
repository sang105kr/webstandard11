// 매개변수의 의미 (첫번째 : 요소의 값, 두번째: 요소의 인덱스, 세번째 : 원배열)
// 용도 : 배열의 요소중 조건에 해당하는 요소 1개를 찾을때(처음 발견되는)
// 반환값 : 찾은 처음 요소 , 없으면 undefined;
const values = [1, 2, 3, 4, 5, 6];
const result = values.find(ele => ele % 2 == 0);
console.log(result);
