function Developer(name) {
   this.name = name
   this.type = "Developer"
}

function Tester(name) {
   this.name = name
   this.type = "Tester"
}

function Costumer(name) {
   this.name = name
   this.type = "Costumer"
}

function EmployeeFactory() {
  this.create = function(name, type) {
    switch(type) {
       case 1:
        return new Developer(name)
        break;
      case 2:
        return new Tester(name)
        break;
      case 3:
        return new Costumer(name)
        break;
    }
  }
}

function details(name, type) {
  console.log("Hi, I am " + name + " and I am a " + type)
  // Called in line 48 => No arguments needed
  // console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

var employees = [];
var employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("John", 2));
employees.push(employeeFactory.create("Tim", 2));
employees.push(employeeFactory.create("David", 3));

employees.forEach(function (emp) {
  details(emp.name, emp.type)
  // details.call(emp)
});
