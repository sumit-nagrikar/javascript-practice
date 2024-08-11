function fibonacciSequence(num){
    if (num <= 0) {
        return [];
    } else if (num === 1) {
        return [0];//cause fibonacci series starts with 0
    }
    const sequence = [0, 1];//initial sequence
    for (let index = 2; index < num; index++) {
        const nextFibonacci = sequence[index-1] + sequence[index-2] ;
        sequence.push(nextFibonacci);   
    }

    return sequence;
}

const numTerms = 5;
const fibonacciSeries = fibonacciSequence(numTerms);
console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]