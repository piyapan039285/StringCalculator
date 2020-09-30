import {romantoInt, intToRoman, addRomanNumbers} from "../main"
import { expect } from 'chai';

describe('romantoInt Tests', () => {
  it('IV should be 4', () => {
    // given
    const roman = 'IV';
    const value = 4;

    // when
    const testvalue = romantoInt(roman);

    // then
    expect(testvalue).equal(value);
  });

  it('XII should be 12', () => {
    // given
    const roman = 'XII';
    const value = 12;

    // when
    const testvalue = romantoInt(roman);

    // then
    expect(testvalue).equal(value);
  });
});

describe('intToRoman Tests', () => {

});

describe('addRomanNumbers Tests', () => {
  
});