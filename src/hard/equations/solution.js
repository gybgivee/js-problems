function returnEquation(randomNumber){
let arr=[];
let begin=0,sum=0;
let newStr="";
let set=['+','-']
let num=[1,2,3,4,5,6,7,8,9];
//string result = string.Join(";", array);
for(let i=0;i<9;i++){

    if(begin==0){
        sum=num[i]+sum;
        newStr=num[i]+'+'+newStr;
       console.log(newStr);
        begin++;
    }else if(begin > 0){
        sum=sum-num[i];
        newStr=num[i]+'-'+newStr;
        console.log(newStr);
        begin=0;
    }

  
}
return {str:newStr,total:sum};
}

console.log(returnEquation(10));