function pascalTrianglee(rows) {
  let pascalNum = 1;
  let rowArray = [];
  for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
    let innerArray = [];
    for (let columnIndex = 0; columnIndex < rowNumber; columnIndex++) {
      //first col and last col are always 1
      if (columnIndex == 0) {
        pascalNum = 1;
      } else {
        //nCr = r!*(n - r)!/n!
        pascalNum = (pascalNum * (rowNumber - columnIndex)) / columnIndex;
        console.log('columnIndex: ' + columnIndex+' rowNumber: ' + rowNumber+' pascalNum: ' + pascalNum);
      }
      innerArray.push(pascalNum);
    }
    rowArray.push(innerArray + "\n");
    console.log('----------------------------------------');
  }
  return rowArray;
}
console.log(pascalTrianglee(10));
