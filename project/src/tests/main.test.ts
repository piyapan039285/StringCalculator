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

  it('"-1, 345" should be 344', () => {
    // given
    const num = '-1, 345';
    const value = 344;

    // when
    const testValue = Add(num);

    // then
    expect(testValue).equal(value);
  })

  it('"-1,-2" should be -3', () => {
    // given
    const num = '-1,-2';
    const value = -3;

    // when
    const testValue = Add(num);

    // then
    expect(testValue).equal(value);
  })

  it('"10,11, -1, 0" should be 20', () => {
    // given
    const num = '10,11, -1, 0';
    const value = 20;

    // when
    const testValue = Add(num);

    // then
    expect(testValue).equal(value);
  })

  it('"1\n2,3" should be 6', () => {
    // given
    const num = '1\n2,3';
    const value = 6;

    // when
    const testValue = Add(num);

    // then
    expect(testValue).equal(value);
  })

  it('"1,\n" should be throw error', () => {
    // given
    const num = '1,\n';

    // when

    // then
    expect(() => {Add(num)}).to.throw();
  })

  it('"1,2,,,3" should be throw error', () => {
    // given
    const num = '1,2,,,3';

    // when

    // then
    expect(() => {Add(num)}).to.throw();
  })
});

describe('xxx Tests', () => {

});

describe('yyy Tests', () => {
  
});