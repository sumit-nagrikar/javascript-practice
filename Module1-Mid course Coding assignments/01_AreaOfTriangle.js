function AreaOfTriangle(side1, side2, side3) {
  let Area = 0;
  let semiPerimeter = (side1 + side2 + side3) / 2;
  let s = semiPerimeter;

  Area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  return Area;
}

console.log(AreaOfTriangle(5,6,7));
