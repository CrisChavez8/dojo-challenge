function findDeepestLevelSubString(str: string): string[] {

    const openingBracketsIndices: number[] = [];
    const deepestSubstrings: string[] = [];
    let currentLevel: number = 0;
    let maxLevel: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        let actualChar = str[i];
        if (actualChar === '(') {
            openingBracketsIndices.push(i);
            currentLevel++;
            if (currentLevel > maxLevel) {
                maxLevel = currentLevel;
                deepestSubstrings.length = 0; 
            }
        } else if (actualChar === ')') {
            const startIndex = openingBracketsIndices.pop();
            if (currentLevel === maxLevel) {
                deepestSubstrings.push(str.substring(startIndex + 1, i));
            }
            currentLevel--;
        }
    }

    return deepestSubstrings;
}

const inputString: string = 'AA(XX((YY))(U))';
console.log(findDeepestLevelSubString(inputString));