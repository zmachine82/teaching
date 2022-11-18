import { StringCalculator } from "./string-calc";

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  })


  it('should return 0 when given a blank string', () => {
    expect(calculator.add('')).toEqual(0)
  });

  it('should return number when given a single number string', () => {
    expect(calculator.add('1')).toEqual(1)
  });

  it('should return sum when given 2 numbers separated by comma', () => {
    expect(calculator.add('1,1')).toEqual(2)
  });

  it('should return ignore non numbers as essentially zeros', () => {
    expect(calculator.add('1,1,1,a')).toEqual(3)
  });

  it('should handle semicolon delimiters', () => {
    expect(calculator.add('1;1')).toEqual(2)
  });

  it('should throw error when it receives a negative number', () => {
    expect(() => calculator.add('-2,2')).toThrowError('No negatives allowed dummy')
  });

})
