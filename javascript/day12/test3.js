const $btns = document.querySelectorAll('.btn');

//case1)
// for(let ele of $btns){
//   // console.log(ele.textContent);
//   ele.addEventListener('click',({target})=>console.log(target.textContent));
// }

//case2) 이터러블 객체를 배열로 전환 :  [...이터러블객체]
// [...$btns].forEach((curr,idx,arr)=>{
//   curr.addEventListener('click', ({ target }) =>
//     console.log(target.textContent),
//   );
// });

//case3)
[...document.querySelectorAll('.btn')].forEach((curr, idx, arr) => {
  curr.addEventListener('click', ({ target }) =>
    console.log(target.textContent),
  );
});