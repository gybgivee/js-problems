function givenCoin(num) {
  //Given the coins _100, 25, 10, 5, 1_,
  let arrayOfCoins =[];
  let result;
  let coin;
  
   while(num>0){
    if(num>100){
    result=num-(num%100);
    arrayOfCoins.push('100:'+result/100);
    num=num-result;
    console.log(result,result/100,num);
   }if(num > 25){
    result=num-(num%25);
    arrayOfCoins.push('25:'+result/25);
    num=num-result;
    console.log(result,result/25,num);
   }if(num > 10){
    result=num-(num%10);
    arrayOfCoins.push('10:'+result/10);
    num=num-result;
    console.log(result,result/10,num);
   }if(num > 5){
    result=num-(num%5);
    arrayOfCoins.push('5:'+result/5);
    num=num-result;
    console.log(result,result/5,num);
   }if(num > 1){
    result=num-(num%1);
    arrayOfCoins.push('1:'+result/1);
    num=num-result;
    console.log(result,result/1,num);
   }
  return arrayOfCoins;
}
}
console.log("givenCoin:" + givenCoin(252));
