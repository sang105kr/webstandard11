{
  function f2(x){
    return x * 2;
  }
  function f3(x){
    return x * 3;
  }
  function f4(x){
    return x * 4;
  }
}

// function times(y) {
//   return function(x){
//     return x * y;
//   };
// }

const times = y => x => x * y;

const f2 = times(2);
console.log(f2(10));

const f3 = times(3);
console.log(f3(10));

const f4 = times(4);
console.log(f4(10));