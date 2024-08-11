
const pi = 3.14;
class Circle{
    constructor(r){
this.radius = r

    }
    getCircumference(){
console.log(`Circumference of circle is: ${Math.round(2*pi*this.radius)}`);
    }
    getArea(){
console.log(`Area of circle is: ${Math.round(pi*this.radius*this.radius)}`);
    }
}

let c1 = new Circle(5);
c1.getCircumference();
c1.getArea();