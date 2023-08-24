const person = {
  name : '홍길동',
  age : 30
}

//프로퍼티 접근방법
//case1) 점(.)접근법
console.log(person.name);
//case2) 대괄호([])접근법
console.log(person['name']);

const tmp = {
  key1 : 'value1',
  key2 : 'value2',
  key3 : 'value3'
}

for(let i=1; i<=3; i++){
  console.log(tmp[`key${i}`]);
}

const keys = Object.keys(tmp);
const values = Object.values(tmp);
console.log(keys,values);

const entries = Object.entries(tmp);
console.log(entries);


