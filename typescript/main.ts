export { }
let message = "Welcome back!";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Tony";

let sentences: string = `My name is ${name}`;

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ["Chris", 22];
let person2: [string, number, number] = ["Test", 22, 23];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Test";

let myVariable: unknown = 10;

// Returns obj that has name property which is of type string
function hasName(obj: any): obj is { name: string} {
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj;
}

if(hasName(myVariable))
  console.log(myVariable.name);

if(typeof myVariable === "string")
(myVariable as string).toUpperCase();


let a;
a = 10;
a = true;

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2?: number): number {
    return num2 ? num1 + num2 : num1;
}

add(5,10);
add(5);

function substract(num1: number, num2: number = 10): number {
    return num1 - num2;
}

substract(10, 5);

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Bruce",
    lastName: "Wayne",
}

fullName(p);

class Employee {
    employeeName: string;
    // public (default), private, protected (access for derived classes)

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee("Vishwas");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }

}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// TODO: decorators, ...