class OopsRectangle{

    constructor(width,height) {
        this.width=width;
        this.height=height;
    }

    getArea(){
console.log(`Area of rectangle is: ${this.width*this.height}`);
    }
    getPerimeter(){
        const perimeter = 2*(this.width+this.height);
        console.log(`Perimeter of rectangle is: ${perimeter}`);
    }
}

let r1 = new OopsRectangle(5,10);

r1.getArea();
r1.getPerimeter();