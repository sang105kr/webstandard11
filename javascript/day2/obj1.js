function Person(name, age){
  //인스턴스 필드
  this.name = name;
  this.age = age;
}
//정적 필드
Person.national = '한국';
//정적 메소드
Person.study = function() {
    console.log('공부하다');
}
//인스턴스 메소드
Person.prototype.smile = function(){
  console.log('웃다');
}
Person.prototype.eat = function () {
  console.log('먹다');
};

const p1 = new Person('홍길동',30);
// p1.name = '홍길동';
// p1.age = 30;

console.log(p1.name, p1.age);
p1.smile();
p1.eat();

Person.study();
console.log(Person.national);

