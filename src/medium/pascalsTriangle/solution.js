function pascalTrianglee(rows) {
  let pascalNum = 1;
  let rowArray = [];
  for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
    let innerArray = [];
    for (let columnIndex = 0; columnIndex <= rowNumber; columnIndex++) {
      //first col and last col are always 1
      if (columnIndex == 0 || columnIndex == rowNumber) {
        pascalNum = 1;
      } else {
        pascalNum = (pascalNum * (rowNumber - columnIndex + 1)) / columnIndex;
        //console.log('pascalNum'+pascalNum+' columnIndex'+columnIndex+' rowNumber'+rowNumber);
      }
      innerArray.push(pascalNum);
    }
    rowArray.push(innerArray + "\n");
  }
  return rowArray;
}
console.log(pascalTrianglee(10));
