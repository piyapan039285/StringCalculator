import { checkServerIdentity } from "tls";

function validateStrOfNumber(number: string): string {
    if (/[,|\n]{2,}/.test(number)) {
        throw 'Vlidate error';
    }

    return number;
}

function getData(text: string): [string, string] {
    const hasDelimiter: boolean = text.indexOf('//') === 0 && text.search('\n') !== -1;

    let delimiter: string = ',';
    if (hasDelimiter) {
        delimiter = text.substring(2, text.indexOf('\n'));
    }

    let numberStr: string = hasDelimiter 
        ? text.substring(text.indexOf('\n') + 1) 
        : text;
    
    return [delimiter, numberStr]
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
    const [delimiter, numberStr] = getData(number);

    const validatedNumber: string = validateStrOfNumber(numberStr);

    const regexSplit = new RegExp(`${delimiter}|\n`);
    const numbers: number[] = validatedNumber
        .split(regexSplit)
        .map(str => +str)
        .filter(num => num <= 1000);

    checkNegativeNumber(numbers);

    const sumNumber: number = numbers.reduce((sum, number) => sum + number, 0);

    return sumNumber;
}

// let a = "//;\n".startsWith('//')

console.log(getData('//;\n1;2'));