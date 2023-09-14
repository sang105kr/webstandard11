document.querySelector('.btngrp').addEventListener('click',({target,currentTarget})=>{
  console.log(target, currentTarget);
  if(target.tagName !== 'BUTTON') return;
  console.log(target.textContent);
  const val = target.classList[1]
  switch(val){
    case "btn1" :
      console.log(`${val} 버튼 클릭!`);
      currentTarget.style.backgroundColor = 'green';
      break;
    case "btn2":
      console.log(`${val} 버튼 클릭!`);
      currentTarget.style.backgroundColor = 'red';
      break;      
    case "btn3":
      console.log(`${val} 버튼 클릭!`);
      currentTarget.style.backgroundColor = 'yellow';
      break;      
  }
});