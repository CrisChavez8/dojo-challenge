
//let msg: string = '25Aabc15?ABC'; abcAABC5152?
let msg: string = '25Aabc15?ABC';

//minusculas, mayusculas, impares, pares, otros caracteres
let numbersAscii: Number[] = [48, 57];
let oddNumbersAscii: Number[] = [49, 51, 53, 55, 57];
let evenNumbersAscii: Number[] = [48, 50, 52, 54, 56];
let upperCaseAscii: Number[] = [65, 90];
let lowerCaseAscii: Number[] = [97, 122];
let output: string = '';
let actualChar: Number;

//const myArray = text.split("");

//GET THE SUBSTRINGS
let lowers: string = '';
let mayus: string = '';
let odds: string = '';
let evens: string = '';
let specials: string = '';

//Iterate the strings
for (let i = 0; i < msg.length; i++) {

  actualChar = msg.charCodeAt(i);

  if (actualChar >= lowerCaseAscii[0] && actualChar <= lowerCaseAscii[1]) {
    //LOWER
    lowers += msg[i];

  } else if (actualChar >= upperCaseAscii[0] && actualChar <= upperCaseAscii[1]) {
    //MAYUS
    mayus += msg[i];

  } else if (actualChar >= numbersAscii[0] && actualChar <= numbersAscii[1]) {
    //NUMBER

    if (oddNumbersAscii.includes(actualChar)) {
      //ODD
      odds += msg[i];
    } else {
      //EVEN
      evens += msg[i];
    }

  } else {
    //SPECIAL CHAR
    specials += msg[i];

  }
}

//concat results
let sortedMsg: string = lowers + mayus + odds + evens + specials; 
console.log(msg);
console.log(sortedMsg);
