function add(q,w){
    return q+w;
  }
  
  function mul(e,r){
    return e*r;
  }
  function sub(z,x){
    return z-x;
  }
  let sum=add(5,5)
  let m=mul(3,9)
  
  let total=sub(sum,m)
  console.log(total)
   
  let mathsmark=70;
  
  if(mathsmark>80){
    console.log("You are a brilliant student")
  } else{
    console.log("You Failed")
  }
  
  let gender="male";
  
  if(gender=="female"){
    console.log("color is pink")
  } 
  else if(gender=="male"){
    console.log("color is blue")
  }
  else{
    console.log("color is violet")
  }
  
  let number=5;
  
  if(number % 2== 0){
    console.log("The number is even")
  }
  else{
    console.log("The number is odd")
  }
  
  let marks={
    m:90,
    t:80,
    e:60,
    s:70,
    sc:50, 
  }
  let total=(marks.m+marks.t+marks.e+marks.s+marks.sc)
  
  let amount= (total/5*100)*100
  console.log(amount)
  
  if(amount>60){
    console.log("You are eligible")
  }else{
    console.log("you are not eligible")
  }
  
  
  
  
  
  
  