import {Add} from "../main"
import { expect } from 'chai';

describe('romantoInt Tests', () => {
  it('"" should be 0', () => {
    // given
    const num = '';
    const value = 0;

    // when
    const testvalue = Add(num);

    // then
    expect(testvalue).equal(value);
  });

  it('"1, 20" should be 21', () => {
    // given
    const num = '1, 20';
    const value = 21;

    // when
    const testvalue = Add(num);

    // then
    expect(testvalue).equal(value);
  });
});

describe('xxx Tests', () => {

});

describe('yyy Tests', () => {
  
});