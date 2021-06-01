interface IAnimal {
    movement: string;
    talks: string;

    info(): string;
}

class Cat implements IAnimal {
    movement: string;
    talks: string;
    name: string;

    constructor(movement: string, talks: string, name: string) {
        this.movement = movement;
        this.talks = talks;
        this.name = name;
    }


    info(): string {
        return `BIRD NAME:${this.name} movement: ${this.movement}, talks: ${this.talks}`;
    }
}

class Bird implements IAnimal {
    movement: string;
    talks: string;
    name: string;

    constructor(movement: string, talks: string, name: string) {
        this.movement = movement;
        this.talks = talks;
        this.name = name;
    }

    info(): string {
        return "Ya ptah infy ne mayu";
    }

}


class Fish implements IAnimal {
    movement: string;
    talks: string;
    name: string;
    odometr: number;


    constructor(movement: string, talks: string, name: string, odometr: number) {
        this.movement = movement;
        this.talks = talks;
        this.name = name;
        this.odometr = odometr;
    }

    info(): string {
        return ` ya fish z dnipro river ya proplyla ${this.odometr}km`;
    }

    averageSpeed(): number {
        return this.odometr / 2;
    }


}

const petya: IAnimal = new Bird("fly", "suk", "petya")
const markiza: IAnimal = new Cat("vilayu zhostko", "ne plavayu", "markiza");
const dori = new Fish("ya volna", "ohohoh", "dori", 100);

console.log(dori.averageSpeed());
console.log(markiza.info());
console.log(petya.info());

abstract class Shape {
    abstract perimeter(): number;
    abstract area(): number;
}

class Triangle extends Shape{
    x:number;
    y:number;
    z:number;


    constructor(x: number, y: number,z:number) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }

    area(): number {
        return (this.x * this.y * this.z);
    }

    perimeter(): number {
        return (this.x + this.y + this.z);
    }

}

class Rectangle extends Shape{
    x: number;
    y: number;


    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
    }

    area(): number {
        return (this.x* this.y);
    }

    perimeter(): number {
        return (this.x + this.y);
    }

}

const tri = new Triangle(5,4,3);
const tri1 = new Triangle(5,6,7);
const sq = new Rectangle(10,5);
const sq1 = new Rectangle(10,15);

const mas: Shape[]= [tri,sq,tri1,sq1];

mas.forEach((value,index)=> console.log(`area of shape${index}: `,value.area()));

