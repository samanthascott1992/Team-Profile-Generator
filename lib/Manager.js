// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// In addition to Employee's properties and methods, Manager will also have:


Employee = require("../lib/Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber=""){
        super(name,id,email);   
         this.officeNumber = officeNumber;
        this.role = 'Manager';
          
    };
    getOfficeNumber(){ return this.officeNumber};
    getRole(){ return this.role};
}





module.exports = Manager;