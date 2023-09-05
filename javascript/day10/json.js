// const person = {
//   name: '홍길동',
//   age: 30,
//   blood: 'A',
//   gender: '남',
// };

// json포맷에서 키와값은 쌍따옴표!!
const jsonString = `{"name":"홍길동","age":"10", "married":"true" }`; 
console.log(typeof jsonString);
console.log(jsonString.name);

const json = JSON.parse(jsonString);  // json포맷의 문자열 => js 객체
console.log(typeof json);
console.log(json);
console.log(json.name, json['age'], json.married);

const jsonToString = JSON.stringify(json); // js객체 => json포맷의 문자열
console.log(typeof jsonToString);
console.log(jsonToString);