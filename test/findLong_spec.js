import {expect} from 'chai';
import {findLong} from '../src/index';

describe('findLong()', () => {

  it('should return undefined', function() {
    const num = 3245;
    const bool = true;
    const emp = null;
    const arr = [];
    const obj = {};

    expect(findLong(num)).to.be.undefined;
    expect(findLong(bool)).to.be.undefined;
    expect(findLong(emp)).to.be.undefined;
    expect(findLong(arr)).to.be.undefined;
    expect(findLong(obj)).to.be.undefined;
  });

  it('should return a number', function() {
    const str = "The quick brown fox jumped over the lazy dog";
    expect(findLong(str)).to.be.a('number');
  });

  it('should return 6', function() {
    const str = "The quick brown fox jumped over the lazy dog";
    expect(findLong(str)).to.equal(6);
  });

  it('should return 5', function() {
    const str = "May the force be with you";
    expect(findLong(str)).to.equal(5);
  });

  it('hould return 6', function() {
    const str = "Google do a barrel roll";
    expect(findLong(str)).to.equal(6);
  });

  it('should return 8', function() {
    const str = "What is the average airspeed velocity of an unladen swallow";
    expect(findLong(str)).to.equal(8);
  });

  it('should return 19', function() {
    const str = "What if we try a super-long word such as otorhinolaryngology";
    expect(findLong(str)).to.equal(19);
  });
});
