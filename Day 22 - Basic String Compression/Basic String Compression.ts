function compressThis(str: string): string {

    let compressedString: string = '';
    let lowerAndTrimmedString: string = str.toLocaleLowerCase().trim();

    let countMap = new Map();
    let actualChar: string;

    for (let i = 0; i < lowerAndTrimmedString.length; i++) {
        actualChar = str[i];
        if(countMap.has(actualChar)){
            let data = countMap.get(actualChar);
            countMap.set(actualChar, data+1);
        }else{
            countMap.set(actualChar,  1)
        }

    }

    countMap.forEach((key, value) => {
        compressedString += key + value;
    })

    return compressedString.length > str.length ? str : compressedString;
}

let stringToCompress: string = 'abc ';
console.log(compressThis(stringToCompress));
