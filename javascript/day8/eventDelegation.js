// 이벤트 위임 없이 이벤트 타겟에 직접 리스너 등록
// { 
//   const $btn1 = document.querySelector('.btn1');
//   const $btn2 = document.querySelector('.btn2');
//   const $btn3 = document.querySelector('.btn3');

//   //1) 이벤트 객체의 target 속성은 이벤트 타겟을 참조 
//   $btn1.addEventListener('click',e => {console.log(e.target.textContent)} );

//   //2) 이벤트 핸들러 내에서 this는 이벤트 타겟
//   //   주위 : 화살표함수에서의 this는 화살표함수외부의 this를 의미
//   $btn2.addEventListener('click',function(){console.log(this.textContent)} );
//   $btn3.addEventListener('click',e => {console.log($btn3.textContent)} );
// }

// 이벤트 위임 
{
  const $btns = document.querySelector('.btns');
  $btns.addEventListener('click',(e)=>{
    //console.log(e.target.classList.contains('btn1'));
    console.log(e);
    console.log(e.type);    // 이벤트 타입
    console.log(e.target) ; // 이벤트 타겟 : 이벤트가 발생한 요소
    console.log(e.currentTarget); // addEventListener를 등록한 요소
    if( e.target.tagName !== 'BUTTON') return;
    // console.log(e.target.tagName);
    // console.log(e.target.textContent);
    // console.log(e.target.classList.item(0));
    switch(e.target.classList.item(0)){
      case 'btn1' :
        console.log('버튼1 클릭');
        break;
      case 'btn2' :
        console.log('버튼2 클릭');
        e.currentTarget.style.backgroundColor = 'blue';
        break;
        case 'btn3' :
        console.log('버튼3 클릭');
        e.currentTarget.style.backgroundColor = 'yellow';
        break;
    }
  });
}