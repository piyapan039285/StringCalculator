const DEFAULT_DELIMITER = ',';

function validateStrOfNumber(number: string): string {

    if (/[,|\n]{2,}/.test(number)) {
        throw 'Vlidate error';
    }

    return number;
}


function getDelimiters(text: string): string[] {    

    const filterBracket: string[] = text.split('').filter(c => c === '[');
    const isSingleDelimiterNoBracket: boolean = filterBracket.length === 0;
    const isSingleDelimiterHasBracket: boolean = filterBracket.length === 1;
    const hasMultipleDelimiter: boolean = filterBracket.length > 1

    if (isSingleDelimiterNoBracket) {
        return [text];

    } else if (isSingleDelimiterHasBracket) {
        const removeBracket = text.substring(1, text.length-1);     
        return [removeBracket];

    } else if (hasMultipleDelimiter) {
        const delimitersWithBracket: string[] = text.match(/(\[[^0-9\n\[\]]+\])/g) || [];        
        const delimiters = delimitersWithBracket.map(item => item.split('[').join('').split(']').join(''))
        return delimiters;
    }

    return [];

}


function getData(text: string): [string[], string] {

    const getDelimiterPart = text.match(new RegExp("\/\/([^0-9]+)\\n"))    

    const hasDelimiter: boolean = getDelimiterPart !== null && !!getDelimiterPart[1];

    const delimiterRaw: string = hasDelimiter ? getDelimiterPart![1] : DEFAULT_DELIMITER;

    const delimiters: string[] = getDelimiters(delimiterRaw).concat(['\n']);

    const numberPart: string = hasDelimiter 
        ? text.substring(text.indexOf('\n') + 1)
        : text;
    
    return [delimiters, numberPart];
}


function checkNegativeNumber(numbers: number[]) {

    const negatives: number[] = numbers.filter(n => n < 0) || [];

    if (negatives.length > 0) {
        throw 'negatives not allowed ' + negatives.join(',')
    }

}


/**
 * Add number string
 * 
 * @param number number string
 * @returns      number 
 */
export function Add(number:string): number {

    const [delimiters, numberStr] = getData(number);

    const validatedNumber: string = validateStrOfNumber(numberStr);

    const replacedDelimiters: string = delimiters.reduce((replaced, delimiter) => {
        return replaced.split(delimiter).join(DEFAULT_DELIMITER)
    }, validatedNumber);

    const numbers: number[] = replacedDelimiters
        .split(DEFAULT_DELIMITER)
        .map(str => +str)
        .filter(num => num <= 1000);

    checkNegativeNumber(numbers);

    const sumNumber: number = numbers.reduce((sum, number) => sum + number, 0);

    return sumNumber;

}

// let a = "//;\n".startsWith('//')

// console.log(Add("//[***][;;]\n1***2;;3"));