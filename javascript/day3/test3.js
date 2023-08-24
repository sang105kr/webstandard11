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
//문제1) 남자 이름만 출력하시오. filter, forEach

// const result = persons.data.filter((person)=> person.gender == '남');
// console.log(result);
// result.forEach(person=>console.log(person.name));
persons.data.filter(person => person.gender == '남')
            .forEach(person=> console.log(person.name));



//문제2) 나이가 가장 많은 사람의 이름은?
