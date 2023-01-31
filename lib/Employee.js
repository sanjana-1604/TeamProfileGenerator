// TODO: Write code to define and export the Employee class
class Employee{

    constructor (empName, id,email)
    {
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getName()
    {
        return this.empName
    }
    getId()
    {
        return this.id
    }
    getEmail()
    {
        return this.email
    }
    getRole()
    {
        return 'Employee'
    }
}

module.exports = Employee; 
