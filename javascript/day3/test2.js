const persons = {
  data: [
    {
      name: '홍길동',
      age: 10,
      gender: '남',
      score: 80,
    },
    {
      name: '홍길남',
      age: 20,
      gender: '남',
      score: 90,
    },
    {
      name: '홍길서',
      age: 30,
      gender: '여',
      score: 100,
    },
  ],
};
// console.log(persons.data);
// console.log(persons.data.length);
// persons.data.forEach((curr,idx,arr)=>{console.log(curr.name)});
//문1) 총점을 구하시오.
console.log(persons.data[0].score);
console.log(persons['data'][0]['score']);
//case1) 직접 접근
console.log(
  persons.data[0].score + 
  persons.data[1].score + 
  persons.data[2].score);
console.log(
  persons['data'][0]['score'] +
  persons['data'][1]['score'] +
  persons['data'][2]['score'],
);

//case2) 일반for문
let sum = 0;
for(let i=0; i<persons.data.length; i++){
  sum += persons.data[i].score;//persons.data[i]['score']
}
console.log(sum);

//case3) 향상된for문
sum = 0;
for(let ele of persons.data){
  sum += ele.score;
}
console.log(sum);

//case4) 배열의 고차함수 forEach  (curr,idx,arr)=>{}
sum = 0;
const result = persons.data.forEach(curr => sum += curr.score );
console.log(sum,result);

//case5) 배열의 고차함수 reduce
const result2 = persons.data.reduce( (acc, curr)=> acc + curr.score, 0);

// 0   {
//       name: '홍길동',
//       age: 10,
//       gender: '남',
//       score: 80,
//     }
// 80  {
//       name: '홍길남',
//       age: 20,
//       gender: '남',
//       score: 90,
//     }   
// 170 {
//       name: '홍길서',
//       age: 30,
//       gender: '여',
//       score: 100,
//     }     
console.log(result2);

