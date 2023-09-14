//target :이벤트가 발생한요소, currentTarget: 리스너를 등록한 요소, type
document.querySelector('.btn.btn1').addEventListener('click',e=>{
  console.log(e.type);
  console.log(document.querySelector('.btn.btn1').textContent);
  console.log(e.target.textContent);
  console.log(e.currentTarget.textContent);
});
document.querySelector('.btn.btn2').addEventListener('click',e=>{
    console.log(e.target.textContent);
});
document.querySelector('.btn.btn3').addEventListener('click',e=>{
    console.log(e.target.textContent);
});

