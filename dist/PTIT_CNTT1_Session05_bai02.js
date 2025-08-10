"use strict";
class Student02 {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let StudentList02 = [];
const student102 = new Student02(1, 18, "studen1@gmail.com");
const student202 = new Student02(2, 19, "studen2@gmail.com");
const student302 = new Student02(3, 17, "studen3@gmail.com");
StudentList02.push(student102);
StudentList02.push(student202);
StudentList02.push(student302);
for (let i = 0; i < StudentList02.length; i++) {
    console.log(StudentList02[i]);
}
