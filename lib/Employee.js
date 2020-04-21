// TODO: Write code to define and export the Employee class
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// The first class is an Employee parent class with the following properties and methods:


function Employee (name="", id=0, email="") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
}
    
Employee.prototype.getName = function(){ return this.name; };
Employee.prototype.getId = function(){ return this.id; };
Employee.prototype.getEmail = function(){ return this.email; };
Employee.prototype.getRole = function(){ return this.role; }

module.exports = Employee;