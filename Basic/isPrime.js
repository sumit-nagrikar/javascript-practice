function prime(number) {
    if (number <= 1) {
        return false; // 1 and numbers less than 1 are not pri
        }

    for (let index = 2; index < Math.sqrt(number); index++) {
        if(number % 2 === 0){
            return false;
        }
    }
    return true;
}

console.log(prime(12));