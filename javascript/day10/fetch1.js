
// fetch : Promise + XMLHttpRequest
// 반환값 : promise객체
const url = 'https://koreanjson.com/users';

fetch(url,{
  method:'GET'
})
  .then(res=>res.json())  // json포멧의 문자열 => js객체로 변환
  .then(res=>console.log(res))
  .catch(err=>console.log(err.massage));