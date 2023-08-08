
/*
function worstFizzBuzz(n: number): string {
    let resultArray: string[] = [];
    for (let i = 1; i <= n; i++) {
        if(i % 5 === 0 && i % 3 === 0){
            resultArray.push("FizzBuzz")
        }else if (i % 5 === 0){
            resultArray.push("Buzz")
        }else if(i % 3 === 0) {
            resultArray.push("Fizz")
        }else{
            resultArray.push(i.toString());
        }
    }
    return resultArray.toString();
}
let nNumber: number = 16;
console.log(worstFizzBuzz(nNumber));
*/


let n = 16;
let resultArray = [];
//naming variables without sense 
  function check (i){
      //Create unnecessary condictionals
      if(i % 5 === 0 && i % 3 === 0){
          resultArray.push("FizzBuzz")
      }else if (i % 5 === 0 && !(i % 3 === 0)){
          resultArray.push("Buzz")
      }else if(i % 3 === 0 && !(i % 5 === 0)) {
          resultArray.push("Fizz")
      }else  if (!(i % 5 === 0) && !(i % 3 === 0)) {
          resultArray.push(i);
      }
  }
    //Calling a function multiple times
    for (let i = 1; i <= n; i++) {
        check(i);
    }
    let result = '';
    //Formatting with another loop the output string
    for (let i = 0; i < n; i++) {
      //We could use a ternary operator
      if(resultArray.length === (i + 1)){
        result = result + resultArray[i] + '' 
      }else{
        result = result + resultArray[i] + ', '
      }
    }
    console.log(result)

    


