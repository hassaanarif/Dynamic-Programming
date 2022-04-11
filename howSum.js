function howSum(target, numbers = []) {
  if (target == 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let remainder = target - num;
    let result = howSum(remainder, numbers);
    if (result !== null) return [...result, num];
  }
  return null;
}

console.log(howSum(7, [5, 3, 4, 7]));

function howSumMemoized(target, numbers = [], memo = {}) {
  if (target in memo) return memo[target];
  if (target == 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let remainder = target - num;
    let result = howSumMemoized(remainder, numbers, memo);
    if (result !== null) {
      memo[target] = [...result, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
}

//------------------------------------------------------------

function howSumTabulation(target, array = []) {
  let finalArray = Array(target + 1).fill(null);
  finalArray[0] = [];
  for (let i = 0; i <= finalArray.length; i++) {
    for (let num of array) {
      if (finalArray[i]) {
        if (finalArray[i + num] <= finalArray.length)
          finalArray[i + num] = [...finalArray[i], num];
      }
    }
  }

  return finalArray[target];
}

console.log(howSumTabulation(7, [5, 4, 3]));
