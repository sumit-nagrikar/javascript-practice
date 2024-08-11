class emp {
    constructor(n,a,g){
        this.name = n,
        this.age = a,
        this.gender = g
    }

    greet(){
        console.log(`Hello, I am ${this.name}`);
    }


}

let e1 = new emp("sumit",25,"male");
let e2 = new emp("Samantha",26,"female");
let e3 = new emp("nikita",27,"female");

//e2.greet();

class manager extends emp{
constructor(n,a,g,d){
    super(n,a,g);
    this.department = d
    this.greet();
}
}

let m1 = new manager("Finance");
