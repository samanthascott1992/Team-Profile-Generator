// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Engineer extends Employee{
        
}
// In addition to Employee's properties and methods, Engineer will also have:

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'

module.exports = Engineer;