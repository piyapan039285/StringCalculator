/**
 * Add number string
 * 
 * @param number number string
 * @returns      number 
 */
export function Add(number:string): number {
    const numbers: number[] = number.split(',').map(str => +str);

    const sumNumber: number = numbers.reduce((sum, number) => sum + number, 0);

    return sumNumber;
}
