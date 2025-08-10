"use strict";
class Rectangle05 {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    calculateArea() {
        return this._width * this._height;
    }
    calculatePerimeter() {
        return 2 * (this._width + this._height);
    }
}
const rect05 = new Rectangle05(5, 3);
console.log(`width: ${rect05.width}`);
console.log(`height: ${rect05.height}`);
console.log(`Area: ${rect05.calculateArea()}`);
console.log(`Perimeter: ${rect05.calculatePerimeter()}`);
rect05.width = 10;
rect05.height = 4;
console.log("Sau cap nhat:");
console.log(`width: ${rect05.width}`);
console.log(`height: ${rect05.height}`);
console.log(`Area: ${rect05.calculateArea()}`);
console.log(`Perimeter: ${rect05.calculatePerimeter()}`);
