class Rectangle05 {
  private _width: number;
  private _height: number;
  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
  }
  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value;
  }
  calculateArea(): number {
    return this._width * this._height;
  }
  calculatePerimeter(): number {
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
