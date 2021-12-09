class Employee {
    id: number;
    // prototype design pattern
    leader: Employee;
    // prototype design pattern
    toBeDirectlyReported: Employee[];
    salary: number = 0;
    setSalaryForEmployee(employee: Employee, newSalary: number) {
        if (employee.leader.id !== this.id) {
            console.log('Do not have permission');
            return;
        }
        employee.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
    addToBeDirectlyReported(employee: Employee) {
        this.toBeDirectlyReported.push(employee);
    }
    constructor(id: number, leader?: Employee) {
        this.id = id;
        this.leader = leader;
        this.toBeDirectlyReported = [];
    }
}

function main() {
    const leader = new Employee(0);
    const newEmployee1 =  new Employee(1, leader);
    const newEmployee2 =  new Employee(2, leader);
    // this should take effect
    leader.setSalaryForEmployee(newEmployee1, 1000);
    // this should not 
    newEmployee1.setSalaryForEmployee(newEmployee2, 1000);
    newEmployee1.setSalaryForEmployee(newEmployee1, 1000);
}