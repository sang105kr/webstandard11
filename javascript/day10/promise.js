// 프라미스 : 비동기 요청한 내용을 처리후 결과를 알려줘

const logic_1 = ()=>{ console.log('로직1')};

const logic_2 = ()=>{ 
  new Promise((resolve,reject)=>{

    console.log('로직2')
    //비동기 처리 : 회원가져오는 로직
    let cnt = 0;
    while(true){
      if(++cnt > 900000000) break;
    }
    const member = `{"name":"홍길동","age":"10"}`

    //비동기 처리 결과를 반드시 resolve 또는 reject의 매개값으로 전달.
    const flag = true;
    if(flag) {
      resolve(member); // 비동기 처리결과를 resolve메소드의 매개값으로 전달
    }else{
      reject(new Error('실패사유')); //비동기 처리 오류시 reject메소드의 매개값으로 전달.
    }
  }).then((res)=>JSON.parse(res))
    .then((res)=>{console.log(res.name)})
    .catch((err)=>{console.log(err.message)})
    .finally(()=>{console.log('작업종료!')})
};

const logic_3 = ()=>{ console.log('로직3')};

logic_1();
logic_2();
logic_3();