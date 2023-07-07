let findPermutationsOf = (inputString: String) : String [] | String => {
   if (inputString.length < 2 ){
    return inputString;
  }

  let permutationsArray : String[] = [];
   
  for (let i: number = 0; i < inputString.length; i++){
    let char = inputString[i]

    let remainingChars : String = inputString.slice(0, i) + inputString.slice(i + 1, inputString.length)
    //console.log("Remaining: ", remainingChars, i);

    for (let permutation of findPermutationsOf(remainingChars)){
      //console.log(char, permutation, i);
      permutationsArray.push(char + permutation); 
      //console.log(permutationsArray);
    }
  }
  return permutationsArray;
}

console.log(findPermutationsOf("abc"));