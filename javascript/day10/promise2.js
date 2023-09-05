// 프라미스 : 비동기 요청한 내용을 처리후 결과를 알려줘

const logic_1 = ()=>{ console.log('로직1')};

const logic_2 = ()=>{ 
  const url = `https://koreanjson.com/users`;
  fetch(url,{
    method: 'GET'
  })
  .then((res)=>res.json())
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err.message)})
  .finally(()=>{console.log('작업종료!')})
};

const logic_3 = ()=>{ console.log('로직3')};

logic_1();
logic_2();
logic_3();