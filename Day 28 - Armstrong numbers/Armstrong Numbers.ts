function isAnArmstrongNumber(armstrongNumber: number): string {

    let destructuredNumber: string[] = armstrongNumber.toString().split('');
    let potentationSum: number = 0;
    for (let i: number = 0; i < destructuredNumber.length; i++) {  
        let actualNumber = parseInt(destructuredNumber[i])
        potentationSum += actualNumber ** destructuredNumber.length
    }
    
    let finalMessage = potentationSum === armstrongNumber
        ? armstrongNumber + " is an Armstrong number!!!"
        : armstrongNumber + " is NOT an Armstrong number!!!"

    return finalMessage;
}

let armstrongNumberToCheck: number = 153;
console.log(isAnArmstrongNumber(armstrongNumberToCheck));
