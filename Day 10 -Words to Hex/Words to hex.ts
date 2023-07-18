function wordsToHex(str: string): string[] {
    let splitedWords: string[] = str.split(' ').map((value) => {
        if(value.length >= 3){
           return "#" + value.charCodeAt(0).toString(16) + value.charCodeAt(1).toString(16) + value.charCodeAt(2).toString(16)
        }else if (value.length === 2){
            return "#" + value.charCodeAt(0).toString(16) + value.charCodeAt(1).toString(16) + '00'
        }else {
            return "#" + value.charCodeAt(0).toString(16) +  '0000'
        }
    });
    return splitedWords;
}

let inputStringToConvert: string = 'Hello, my name is Gary and I like cheese.';
console.log(wordsToHex(inputStringToConvert));
