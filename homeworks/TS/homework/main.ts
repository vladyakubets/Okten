interface IDeputat {
    name: string;
    age: number;
    isMale: boolean;
    honesty: number;
    minimum: number;
}

class Deputat implements IDeputat {
    age: number;
    honesty: number;
    isMale: boolean;
    minimum: number;
    name: string;


    constructor(age: number, honesty: number, isMale: boolean, minimum: number, name: string) {
        this.age = age;
        this.honesty = honesty;
        this.isMale = isMale;
        this.minimum = minimum;
        this.name = name;
    }

    giveBribe = (bribe:number):string => {
        if (bribe < )
    }


}



