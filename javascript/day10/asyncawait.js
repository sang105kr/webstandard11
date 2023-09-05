// async 함수 : 비동기를 동기처럼 수행하는 함수
// await + (프라미스객체 || 값): async함수 내에서 사용되는 키워드

const logic_1 = ()=>console.log('로직1');

const logic_2 = async ()=>{
  try{
    console.log('로직2_시작');
    const x = await fetch('https://koreanjson.com/users',{method:'GET'});
    const y = await x.json();
    console.log(y);
    console.log('로직2_종료');
  }catch(err){
    console.log(err.message);
  }finally {
    console.log('종료!');
  }
}

const logic_3 = () => console.log('로직3');

logic_1();
logic_2();
logic_3();