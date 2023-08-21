// if
{
  let score = 80;
  let evaluation = '';
  if(score >= 90){
    evaluation ='수';
  }else if(score >= 80){
    evaluation = '우';
  }else if(score >= 70 ){
    evaluation = '미';
  }else if(socre >= 60){
    evaluation = '양';
  }else{
    evaluation = '가';
  }
  console.log(evaluation);
}
// switch 
{
  let score = 80;
  let evaluation = '';
  switch(Math.floor(score / 10)){
    case 9 :
      evaluation = '수';
      break;
    case 8 :
      evaluation = '우';
      break;
    case 7 :
      evaluation = '미';
      break;
    case 6 :
      evaluation = '양';
      break;
    default:
      evaluation = '가';
  }
  console.log(evaluation);
}