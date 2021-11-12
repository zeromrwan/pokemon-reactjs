const utils = {};

utils.getFibonaciSeq = async (n) => {
  const list = [0, 1];
  for (let x = 2; x < n + 1; x += 1) {
    list.push(list[x - 2] + list[x - 1]);
  }
  return list[n];
};

utils.checkPrime = async (num) => {
  for (let i = 2; i < num; i++){
    if (num % i === 0) return false;
  } 
  return num > 1;
};

module.exports = utils;
