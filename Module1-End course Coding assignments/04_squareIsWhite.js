var squareIsWhite = function(coordinates) {
    return (coordinates.charCodeAt(0) + coordinates.charCodeAt(1)) % 2 === 1
};

console.log(squareIsWhite("2h"))