const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(githubUsername, empName, id,email)
    {
        super(empName, id,email);
        this.githubUsername = githubUsername;
        
    }
    getGithub()
{
    return this.githubUsername

}
getRole()
{
    return "Engineer"
}
}

module.exports = Engineer