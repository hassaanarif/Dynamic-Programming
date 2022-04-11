//TODO Simple Fib Function

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(4));

//TODO Fib Function Memoized

function fibMemoized(n, HM = {}) {
  if (n in HM) return HM[n];
  if (n <= 2) return 1;

  HM[n] = fibMemoized(n - 1, HM) + fibMemoized(n - 2, HM);
  console.log(n, HM[n]);
  return HM[n];
}

fibMemoized(7);
