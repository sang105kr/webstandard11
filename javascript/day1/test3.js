//1~10까지의 합
//1) for
{
  let sum = 0;
  for(let i=1; i<=10; i++){
    if( i % 2 !== 0 ) {
      continue;
    }
    sum += i;
  }
  console.log(sum);
}
//2) while
{
  let i = 1;
  let sum = 0;
  while(i<=10){
    sum += i;   // sum = sum + 1;
    if( i == 5) {
      break;
    }
    i++;
  }
  console.log(sum);
}
//3) do~while
{
  let i = 1;
  let sum = 0;
  do {
    sum += i;
    i++;
  }while(i<=10);
  console.log(sum);
}