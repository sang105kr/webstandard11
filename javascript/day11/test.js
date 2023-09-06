{ // 객체리터럴에 동적으로 프로퍼티 추가하기
  const obj = {}
  obj.name = '홍길동';
  obj.age = 30;
  console.log(obj);
  obj.smile = ()=>{
    console.log('먹다');
  }
  console.log(obj);
  obj.smile();
}
{
  const name = '홍길동';
  const age = 30;
  const person = { name: name, age: age };
  console.log(person);

  //es6 : 변수로 프로퍼티 추가할때 
  //      변수명이 프로퍼티키, 변수값이 프로퍼티값
  const person2 = { name, age };
  console.log(person2);
}