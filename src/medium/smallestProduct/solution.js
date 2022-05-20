function findPowArray(max, arrayofPrimeNumbers) {
  let count = 1,
    result = 0;
  let powArray = [];
  console.log(arrayofPrimeNumbers.length);
  for (let i = 0; i < arrayofPrimeNumbers.length; i++) {
    while (result < max) {
      console.log(i);
      prePow = Math.pow(arrayofPrimeNumbers[i], count);
      if (prePow >= max) {
        break;
      }
      result = prePow;

      console.log( result, ":", i, ":", count);
      powArray[i] = count;
      count++;
    }
    result = 0;
    count = 1;
  }

  return powArray;
}
function primeNumber(min, max) {
  const size = max - min + 1;
  console.log(size);
  let count = 0;
  let newArray = [];

  let arrayofPrimeNumbers = [];
  const arr = Array.from({ length: max - min + 1 }, (element, i) => i + min);

  for (let i = 0; i <= size; i++) {
    count = 0;
    for (let j = min; j <= max; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      arrayofPrimeNumbers.push(arr[i]);
    }
  }
  return arrayofPrimeNumbers;
}
function smallestProduct(arrayofPrimeNumber,arrayofPow){
const size = arrayofPrimeNumber.length;
let collectNum=1,result;
for (let i = 0; i < size; i++) {
    result=Math.pow(arrayofPrimeNumber[i],arrayofPow[i]);
    collectNum=collectNum*result;
    //console.log(collectNum);

}
return collectNum;
}
const arrayofPrimeNumber = primeNumber(1,20);
const arrayofPow = findPowArray(20, arrayofPrimeNumber);
const smallestNum = smallestProduct(arrayofPrimeNumber,arrayofPow)
console.log(smallestNum);

