//let inputString: string = 'tree'; eert?
let inputString: string = 'tree';
let countMap = new Map();
let actualChar: string;

//Get frecuency of each letter
for (let i = 0; i < inputString.length; i++) {

  actualChar = inputString[i];
  if(countMap.has(actualChar)){
    let data = countMap.get(actualChar);
    countMap.set(actualChar, data+1);
  }else{
    countMap.set(actualChar,  1)
  }

}

//sort the map iterating and return a sorted array
let countMapSorted = new Map([...countMap.entries()].sort((a, b) => b[1] - a[1]));

let outputString: String = '';
//Concat the final string by frecuency
countMapSorted.forEach(function (data, key) {
  if(data > 1){
    for(let i = 1;  i <= data; i++ ){
      outputString += key;
    }
  }else{
    outputString += key;
  }
  
})

console.log(countMap);
console.log(countMapSorted);
console.log(outputString);