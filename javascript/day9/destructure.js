const arr = [1,2,3];

{// 배열요소를 개별 변수에 저장하기
  const x = arr[0];
  const y = arr[1];
  const z = arr[2];
  console.log(x,y,z);
}
//destructure (구조분해) : (배열 or 객체리터럴) 구성요소를 개별 변수에 저장
{ //배열의 구조분해
  const [x,y,z] = [1,2,3];
  console.log(x,y,z);
}
{ //객체 리터럴의 구조분해
  const person = {
    name: '홍길동',
    age: 30,
    blood: 'A',
    gender: '남',
    //es5
    smile : function () {
      console.log('웃다')
    },
    //es6
    eat() {
      console.log('먹다')
    }
  };
  {
    const name = person.name;
    const age = person.age;
    const blood = person.blood;
    console.log(name,age,blood);
  }
  {
    // 객체의 프로퍼티키를 찾아 동일한 변수이름에 값을 매칭
    const { age, name, blood } = person;
    console.log(age, name, blood);
    // 객체의 프로퍼티키와 다른 이름의 변수에 개별 저장코자할때
    const { age: x, name: y, blood: z } = person;
    console.log(x, y, z);
  }
}