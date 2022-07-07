# js-algorithms-and-data-structures
It's important to have a precise vocabulary to talk about how our code performs, that is Big O

function addUpTo(n) {
    let total = 0;
    for (let i = 0; i < n; i++){
        total += i;
    }
    return total;
}
vs
function addUpTo(n) {
    return n * (n+1) / 2;
}

## Big O Definition
#### We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

#### f(n) could be linear (f(n) = n)
#### f(n) could be quadratic (f(n) = n^2)
#### f(n) could be constant (f(n) = 1)