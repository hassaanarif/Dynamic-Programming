function gridTravel(m, n) {
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;

  return gridTravel(m - 1, n) + gridTravel(m, n - 1);
}

// console.log(gridTravel(2, 3));
// console.log(gridTravel(10, 10));

function gridTravelMemoized(m, n, memo = {}) {
  let key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;

  memo[key] =
    gridTravelMemoized(m - 1, n, memo) + gridTravelMemoized(m, n - 1, memo);
  return memo[key];
}

console.log(gridTravelMemoized(2, 3));
console.log(gridTravelMemoized(10, 10));
console.log(gridTravelMemoized(20, 20));
