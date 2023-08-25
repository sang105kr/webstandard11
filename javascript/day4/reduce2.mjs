const data = [3,2,5,4,2,5];
let result = null;

//문제1) 총합
{
  result = data.reduce((acc,curr) => acc + curr , 0);
  console.log(result);
}

//문제2) 평균
{
  result = data.reduce((acc, curr, idx, arr) => 
    (idx == arr.length - 1) ? (acc + curr) / arr.length : acc + curr, 0);
  console.log(result);
}

//문제3) 최대값
{
  result = data.reduce((acc,curr) => (acc > curr) ? acc : curr);
  console.log(result);
}

//문제4) 중복제거
{
  // [3, 2, 5, 4, 2, 5];
  //case1)
  result = data.reduce((acc, curr) => {
    if (acc.indexOf(curr) == -1) acc.push(curr);
    return acc;
  }, []);

  console.log(result);

  //1회차 - acc:[]          curr :3  result: [3]
  //2회차 - acc:[3]         curr :2  result: [3,2]
  //3회차 - acc:[3,2]       curr :5  result: [3,2,5]
  //4회차 - acc:[3,2,5]     curr :4  result: [3,2,5,4]
  //5회차 - acc:[3,2,5,4]   curr :2  result: [3,2,5,4]
  //6회차 - acc:[3,2,5,4]   curr :5  result: [3,2,5,4]
}

// 문제5) 중복숫자 갯수 구하기 {'2':2,'3':1,'4':1,'5':2}
{
  result = data.reduce((acc, curr, idx, arr) => {}, {});

  console.log(result);

  //1회차 - acc:{}                              curr :3  result: {'3':1}
  //2회차 - acc:{'3':1}                         curr :2  result: {'3':1,'2':1}
  //3회차 - acc:{'3':1,'2':1}                   curr :5  result: {'3':1,'2':1,'5':1}
  //4회차 - acc:{'3':1,'2':1,'5':1}             curr :4  result: {'3':1,'2':1,'5':1,'4':1}
  //5회차 - acc:{'3':1,'2':1,'5':1,'4':1}       curr :2  result: {'3':1,'2':2,'5':1,'4':1}
  //6회차 - acc:{'3':1,'2':2,'5':1,'4':1}       curr :5  result: {'3':1,'2':2,'5':2,'4':1}
}