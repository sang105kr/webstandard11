const arr = [1,2,3];

//case1) 일반 for문
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}
//case2) 향상된 for문
for(let ele of arr){
  console.log(ele);
}

//case3) 배열의 forEach 고차함수
// 매개변수의 의미
// 용도 : 배열의 요소를 순차적으로 처리할때.
// 반환값 : 없음.
arr.forEach((curr)=>{
  console.log(curr*2);
})