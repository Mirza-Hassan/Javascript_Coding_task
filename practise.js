function maxSum(array) {
  let maxiSum = array[0];
  let currentSum = array[0];

  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxiSum = Math.max(maxiSum, currentSum);
  }

  return maxiSum;
}

module.exports = maxSum;
