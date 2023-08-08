function printNumbersWithNoLoops(from: number, to: number, arr : number[] = [] ) {
    if(from <= to){
      arr.push(from)
      printNumbersWithNoLoops((from + 1 ), to, arr);
    }else{
      console.log(arr.toString())
    }
  }
  printNumbersWithNoLoops(5,10)

  
