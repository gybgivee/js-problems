function findAmicable(num) {
    let count=0,sum=0;
    let arr=[];
  
    let size=num;
    
    for(let i=1;i<size;i++){
        if(num%i==0){
        arr[count]=i;
        count++;
        sum+=i;
        }
    }


return {amicable:arr,total:sum};
}
console.log(findAmicable(100000));