class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log(this);
    }
    // Can prefix with get or set
    getArea() {
        return this.width * this.height;
    }

    describe() {
        console.log('This is a regular rectangle object.');
    }

    // Example helper function
    static allRectanglesAreUnique(...rectArray) {
        if (rectArray.length < 2) return true;
        let stringifiedArray = rectArray.map(x => Object.values(x).join(','));
        for (let i = 0; i < stringifiedArray.length; i++) {
            for (let j = 0; j < i; j++) {
                if (stringifiedArray[i] === stringifiedArray[j])
                    return false;
            }
        }
        return true;
    }
}

class SuperRectangle extends Rectangle {
    constructor(_width, _height, _color, _superPower) {
        super(_width, _height, _color);
        this.superPower = _superPower;
    }

    // Polymorphism (override)
    describe() {
        // Can also do super.describe() to also call the parent's method
        console.log("This is a super rectangle!");
    } 
}
let myRect1 = new Rectangle(3, 5, "blue");
let { width, height, color } = myRect1;
let myRect2 = new SuperRectangle(width, height, color, "fly");
let myRect3 = new SuperRectangle(...Object.values(myRect1), "laser vision");
let myRect4 = new Rectangle(3,5, "blue");
myRect1.describe();
myRect3.describe();

Rectangle.allRectanglesAreUnique([myRect1, myRect2, myRect3])
// <- true


// Keys can also be accessed with a for in loop.
// for(let prop in myRect1)
//   console.log(prop);

