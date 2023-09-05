// ... (rest 연산자) : 값의 목록을 배열로 받는 연산자.
function sum(...arr) {
  // console.log(arr); [1,2,3]
  let tot = 0;
  for(let ele of arr){
    tot += ele;
  }
  return tot;
}

console.log(sum(1,2,3));     //6
console.log(sum(1,2,3,4));   //10
console.log(sum(1,2,3,4,5)); //15