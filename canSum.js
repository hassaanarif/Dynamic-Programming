function canSum(target, numbers = []) {
  if (target < 0) return false;
  if (target === 0) return true;

  for (let num of numbers) {
    let remainder = target - num;
    if (canSum(remainder, numbers) === true) return true;
  }
  return false;
}
//--------------------------------------------------------------------//
function canSumMemoized(target, numbers = [], memo = {}) {
  if (target in memo) return memo[target];

  if (target < 0) return false;
  if (target === 0) return true;

  for (let num of numbers) {
    let remainder = target - num;
    if (canSum(remainder, numbers, (memo = {})) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}
//--------------------------------------------------------------------//

function canSumTabulation(target, array = []) {
  let finalArray = Array(target + 1).fill(false);
  finalArray[0] = true;
  for (let i = 0; i <= finalArray.length; i++) {
    for (let num of array) {
      if (finalArray[i]) {
        if (finalArray[i + num] <= finalArray.length)
          finalArray[i + num] = true;
      }
    }
  }

  return finalArray[target];
}

console.log(canSumTabulation(7, [5, 4, 3]));
