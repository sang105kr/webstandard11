{
  function sum(x, y) {
    return x + y;
  }

  const result = sum(10, 20);
  console.log(`result=${result}`);
}
/* IIFE(Immediately Invoked Function Expresstion) */
{
  const result = (function (x, y) {
    return x + y;
  })(10,20);
  console.log(`result=${result}`);
}
{
  const result = (function (x, y) {
    return x + y;
  }(10, 20));
  console.log(`result=${result}`);
}

{
  const result = ((x, y)=> x + y)(10, 20);
  console.log(`result=${result}`);
}
