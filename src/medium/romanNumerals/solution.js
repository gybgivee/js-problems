function romanToArabic(str){
    const arrOfRoman=['I','V','X','L','C','D','M'];
    const arrOfArabic=[1,5,10,50,100,500,100];
  let collectNum=[];
  let   totalScore;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<arrOfRoman.length; j++){
            if(str[i]===arrOfRoman[j]){
               
                 collectNum.push(arrOfArabic[j]);
            }
        }
       
    }
    let sum = 0;
    if(collectNum[0]<collectNum[1]){
        collectNum=collectNum.sort(function(a, b){return b - a});
        console.log(collectNum);
        const subtract = (accumulator, number) =>  accumulator - number;
         totalScore = collectNum.reduce(subtract);       

    }else{
         totalScore = collectNum.reduce(function (sum, score) {
            return sum + score;
          },0); 
          console.log(totalScore);

    }
  return totalScore;
}
console.log(romanToArabic('IV'));
console.log(romanToArabic('VI'));