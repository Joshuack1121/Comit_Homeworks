//Task 1

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15

const half = createMultiplier(0.5);
console.log(half(10)); // 5

//Task 2

function once(fn) {
    let called = false;

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    }
}

function greet(name) {
    console.log("Hello, " + name + "!");
}

const greetOnce = once(greet);

greetOnce("Ygor");
greetOnce("John");
greetOnce("Jane"); 

// Task 3

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(0));
console.log(factorial(5)); 
console.log(factorial(3)); 
