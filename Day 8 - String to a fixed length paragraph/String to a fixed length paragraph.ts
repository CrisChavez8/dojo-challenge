function fixingStringToALengthParagrapgh(str: string, maxLenght: number): string {

    let splitedWords: string[] = str.split(' ');
    if(splitedWords.findIndex((word) => word.length > maxLenght) != -1){
      throw new Error(
        "the paragraph can't have a max length lower than " + maxLenght + " because: '" + splitedWords[splitedWords.findIndex((word) => word.length > maxLenght)] + "' is greater"
      );
    }
    let fixedParagraph : string = '';
    let actualLine : string = '';
    let availableSpace : number = maxLenght;
    for (let i: number = 0; i < splitedWords.length; i++) {
        let actualWord: string = splitedWords[i];
        if (availableSpace >= actualWord.length) {
            actualLine = actualWord;
            if ((actualLine.length + 1) <= availableSpace){
                actualLine += ' ';
                availableSpace -= (actualWord.length + 1);
            }else {
                availableSpace -= actualWord.length;
            }
            
        } else {
            fixedParagraph += '\n';
            actualLine = actualWord;
            availableSpace = maxLenght;
            if ((actualLine.length + 1) <= availableSpace){
                actualLine += ' ';
                availableSpace -= (actualWord.length + 1);
            }else {
                availableSpace -= actualWord.length;
            }
        }
        fixedParagraph += actualLine;
    }
    return fixedParagraph;
}

let inputText: string = 'When you play the game of thrones, you win or you die.';
let maxLenghtInput : number = 8;
console.log(fixingStringToALengthParagrapgh(inputText, maxLenghtInput));
/**
 * When you
play the
game of 
thrones,
you win 
or you 
die.
 */