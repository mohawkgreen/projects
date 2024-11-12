function fibonacciGenerator (n) {
    if (n === 0) {
        return;
    } else if (n === 1) {
        return [0];
    }
    var fibonacciArray = [0, 1];
    for (var i = 2; i < n; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }
    return fibonacciArray;
}

fibonacciGenerator(100);