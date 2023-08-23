// 매개변수의 의미 (첫번째 : 요소의 값, 두번째: 요소의 인덱스, 세번째 : 원배열)
// 용도 : 배열의 요소를 다른값으로 치환.
// 반환값 : 배열
const values = [1, 2, 3];
// const result = values.map((curr, idx, arr)=>{
//                 // console.log(curr,idx,arr);
//                   return curr * 3;
//                });
// const result = values.map(curr => curr * 2);
const result = values.map(( curr, idx, arr)=>{
                  return idx;
               });
console.log(result);
