// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
 Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name, id, email, github=""){
        super(name,id,email);
        this.github = github; 
        this.role = 'Engineer';             

    };
    getGithub(){ return this.github};
    getRole(){ return this.role};
}
// In addition to Employee's properties and methods, Engineer will also have:nnnnn nnnnnnnnnnnn


 





module.exports = Engineer;