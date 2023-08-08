function isAdditiveNumber(str: string): boolean {

    let isOneNumberAdditive: boolean = false;

    for (let i = 0; i < str.length - 2; i++) {
            isOneNumberAdditive = parseInt(str[i]) + parseInt(str[i + 1]) === parseInt(str[i + 2])
    }

    return isOneNumberAdditive;
}

let additiveNumberInput: string = '112358';
console.log(isAdditiveNumber(additiveNumberInput));

