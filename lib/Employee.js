// TODO: Write code to define and export the Employee class
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// The first class is an Employee parent class with the following properties and methods:


class Employee {
    constructor(name="", id=0, email="") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
    }

    getName(){ return this.name; };
    getId(){ return this.id; };
    getEmail(){ return this.email; };
    getRole(){ return this.role; }
}
    



module.exports = Employee;