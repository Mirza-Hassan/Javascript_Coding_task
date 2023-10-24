const maxSum = require('./maximumSum.js');

describe('maxSum', () => {
  it('should return the maximum sum of the given array', () => {

    // case 1: Array with both positive and negative numbers.
    const array1 = [1, -4, 2, -1, 3, -3, 10, -1, -11, -100, 8, -1];
    expect(maxSum(array1)).toBe(11);

    // case 2: Array with all positive numbers.
    const array2 = [1, 2, 3, 4, 5];
    expect(maxSum(array2)).toBe(15);

    // case 3: Array with negative numbers.
    const array3 = [-2, -3, -4, -2];
    expect(maxSum(array3)).toBe(-2);

    // case 4: Array with mixed positive and negative numbers, including skipping negatives.
    const array4 = [5, 1, 2, 3, -5];
    expect(maxSum(array4)).toBe(11);

    // case 5: Array with all negative numbers.
    const array5 = [-10, -5, -1, -2, -3];
    expect(maxSum(array5)).toBe(-1);

    // case 6: Array with all zeros.
    const array6 = [0, 0, 0, 0, 0];
    expect(maxSum(array6)).toBe(0);

    // case 7: Array with positive and negative numbers, including all positives.
    const array7 = [5, 5, 5, 5, -10];
    expect(maxSum(array7)).toBe(20);

    // case 8: Array with negative numbers, starting and ending at positives.
    const array8 = [-5, -5, 5, 5, 5];
    expect(maxSum(array8)).toBe(15);

    // case 9: Array with positive, negative, and zero numbers.
    const array9 = [0, 1, -2, 3, -4, 5];
    expect(maxSum(array9)).toBe(5);

    // case 10: Array with alternating positive and negative numbers.
    const array10 = [-10, 20, -30, 40, -50, 60];
    expect(maxSum(array10)).toBe(60);
  });
});
