function fibonacciNumber(num){
//The first few are therefore 100 Fibonacci numbers= 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
let fibonacciArray = [];
let count=0;
let fibonacciNumber;
let newStr = '';
for(let i = 1; i <=num;i++){
fibonacciNumber=i+count;
//arrayOfCoins.push('1:'+result/1);
fibonacciArray.push(i+'+'+count+'='+fibonacciNumber);
console.log(i+'+'+count+'='+fibonacciNumber);
count=fibonacciNumber;
}
return fibonacciArray;
}
console.log(fibonacciNumber(10));
