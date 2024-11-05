function fizzBuzz () {
    var fbArray = [];
    for ( var i = 1; i < 101; i++ ) {
        if (i % 3 === 0 && i % 5 === 0) {
            fbArray.push("FizzBuzz");
        } else if (i % 3 === 0) {
            fbArray.push("Fizz");
        } else if (i % 5 === 0) {
            fbArray.push("Buzz");
        } else {
            fbArray.push(i);
        }
    }
    return fbArray;
}

console.log(fizzBuzz());