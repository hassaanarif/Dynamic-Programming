function bestSum(target, array = []) {
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;

  for (let num of array) {
    let remainder = target - num;
    let remainderArray = bestSum(remainder, array);
    if (remainderArray !== null) {
      let combination = [num, ...remainderArray];
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      )
        shortestCombination = combination;
    }
  }
  return shortestCombination;
}

function bestSumMemoized(target, array = [], memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;

  for (let num of array) {
    let remainder = target - num;
    let remainderArray = bestSumMemoized(remainder, array, memo);
    if (remainderArray !== null) {
      let combination = [num, ...remainderArray];
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      )
        shortestCombination = combination;
    }
  }
  memo[target] = shortestCombination;
  return memo[target];
}

function bestSumTabulation(target, array = []) {
  let finalArray = Array(target + 1).fill(null);
  finalArray[0] = [];
  for (let i = 0; i <= finalArray.length; i++) {
    for (let num of array) {
      if (finalArray[i] !== null) {
        if (finalArray[i + num] <= finalArray.length) {
          let currentIndexProbableArray = [...finalArray[i], num];
          if (
            !finalArray[i + num] ||
            currentIndexProbableArray.length < finalArray[i + num].length
          )
            finalArray[i + num] = currentIndexProbableArray;
        }
      }
    }
  }
  return finalArray[target];
}
let str = "This is a string............";
