class Person {
  //생성자 메소드
  constructor(name,age){
    //인스턴스 필드
    this.name = name;
    this.age =age;
  }

  //인스턴스 메소드
  smile() {
    console.log('웃다');
  }
  eat() {
    console.log('먹다');
  }

  //정적 필드
  static national = '한국';
  //정적 메소드
  static study() {
    console.log('공부하다');
  }
}
// 인스턴스
const p1 = new Person('홍길동', 30);
// p1.name = '홍길동';
// p1.age = 30;

console.log(p1.name, p1.age);
p1.smile();
p1.eat();

Person.study();
console.log(Person.national);

const p2 = new Person('홍길순', 20);
p2.smile();
p2.eat();

console.log(typeof p1);
