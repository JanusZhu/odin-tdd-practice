function analyzeArray(array) {
  const object = {
    average: array.reduce((pre, cur) => pre + cur, 0) / array.length,
    min: array.reduce((a, b) => (a < b ? a : b)),
    max: array.reduce((a, b) => (a > b ? a : b)),
    length: array.length,
  };
  return object;
}

module.exports = analyzeArray;
