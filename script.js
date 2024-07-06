// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employees = [];
const employee = {
  firstName: "First Name",
  lastName: "Last Name",
  salary: ""
};
addEmployeesBtn.addEventListener("click", collectEmployees);
function collectEmployees() {

while (true) {
  let firstName = prompt ("Enter Employee's First Name:");
  if (firstName.toLocaleLowerCase() === "exit") {
    break;
  }

  let lastName = prompt("Enter Employee's Last Name:");
  let salaryInput = prompt("Enter Employeee's Salary:");
  let salary = isNaN(parseInt(salaryInput)) ? 0 : parseInt(salaryInput);

  let employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  }

  employees.push(employee);
}
return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const sum = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  const average =sum / employeesArray.length;
  let averageSalary = isNaN(parseInt(average)) ? 0 : parseInt(average);

  console.log(`The average salary amoung ${employeesArray.length} employees is $${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
