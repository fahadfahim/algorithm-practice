class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let student1 = new Student("John", "Doe", 10);
console.log('student1', student1);