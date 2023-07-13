function returnIndicesOfTwoSum(
  arrayOfIntegers: number[],
  target: number
): number[] {
  if (arrayOfIntegers.length < 2) {
    throw new Error(
      "Invalid input. Please provide a array of numbers with minimun 2 elements"
    );
  }

  let indicesResult: number[] = [];

  for (let i: number = 0; i < arrayOfIntegers.length; i++) {
    let sum = arrayOfIntegers[i] + arrayOfIntegers[i + 1];

    if (sum === target) {
      indicesResult.push(i);
      indicesResult.push(i + 1);
    }
  }
  
  return indicesResult;
}

const arrayInput: number[] = [2, 7, 11, 15];
const targetInput: number = 9; // [0, 1]
console.log(returnIndicesOfTwoSum(arrayInput, targetInput));
