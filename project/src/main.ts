function validateStrOfNumber(number: string): string {
    if (/[,|\n]{2,}/.test(number)) {
        throw 'Vlidate error';
    }

    return number;
}

/**
 * Add number string
 * 
 * @param number number string
 * @returns      number 
 */
export function Add(number:string): number {
    const validatedNumber: string = validateStrOfNumber(number);

    const numbers: number[] = validatedNumber.split(/,|\n/).map(str => +str);

    const sumNumber: number = numbers.reduce((sum, number) => sum + number, 0);

    return sumNumber;
}
