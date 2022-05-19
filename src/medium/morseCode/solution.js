function morseCode(engStr){
const arrayOfMozz=[['.-'],['-...'],['-.-.'],['-..'],['.'],['..-.'],['--.'],['....'],['..'],['.---'],['-.-'],['.-..'],['--'],
['-.'],['---'],['.--.'],['--.-'],['.-.'],['...'],['-'],['..-'],['...-'],['.--'],['-..-'],['-.--'],['--..']];
const arrayOfUpperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrayOfLowerCase=[ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let newStr='';
let count=0;
console.log(arrayOfMozz.length,arrayOfUpperCase.length);
for(let count=0; count<engStr.length; count++){
for(let i=0; i<arrayOfUpperCase.length; i++){

    if(engStr[count]===arrayOfUpperCase[i]||engStr[count]===arrayOfLowerCase[i]){
        console.log(i,arrayOfMozz[i],newStr);
        newStr=newStr+arrayOfMozz[i];
    
    }
    
}
}
return newStr;
}

console.log(morseCode('IloveYou'));
