function isPalindrome(str: string): boolean {

    let isAValidPalindrome: boolean = true;
    let formatedString: string[] = [];
    let lowerAndTrimmedString: string = str.toLocaleLowerCase().trim();

    lowerAndTrimmedString.split('').forEach((value, index) => {
        if((lowerAndTrimmedString.charCodeAt(index) > 96 && lowerAndTrimmedString.charCodeAt(index) < 125) || (lowerAndTrimmedString.charCodeAt(index) > 47 && lowerAndTrimmedString.charCodeAt(index) < 58)){
            formatedString.push(value);
        }
    });

    formatedString.forEach((element, index) => {
        if(formatedString[index] !== formatedString.reverse()[index]){
            isAValidPalindrome = false;
        }
    });

    return isAValidPalindrome;
}

let isAPalindromeInput: string = 'Able was I, ere I saw Elba.';
console.log(isPalindrome(isAPalindromeInput));
