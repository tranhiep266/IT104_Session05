"use strict";
class Employee03 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
const employee103 = new Employee03("Hiep", "Rikkei", "0925648515");
employee103.printInfo();
