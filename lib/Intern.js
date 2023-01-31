const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee
{
    constructor(school,empName, id,email)
    {
        super(empName, id,email)
        this.school = school
       
    }
    getSchool()
    {
        return this.school
    }
    getRole()
{
    return "Inter"
}
}
module.exports = Intern