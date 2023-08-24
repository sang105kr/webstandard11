const person = {
  name : '홍길동',
  age : 30,
  smile() {
    console.log('웃다');
  },
  eat() {
    console.log('먹다')
  }
}

//
console.log(person.name, person.age);
person.smile();
person.eat();

const person2 = {
  name: '홍길순',
  age: 20,
  smile() {
    console.log('웃다');
  },
  eat() {
    console.log('먹다');
  },
};

const person3 = {
  name: '홍길서',
  age: 40,
  smile : function() {
    console.log('웃다');
  },
  eat : function() {
    console.log('먹다');
  },
};
// 객체 리터럴
//const v = {property_key : property_value, ...};

