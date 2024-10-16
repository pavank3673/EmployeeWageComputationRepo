import { question } from "readline-sync";

let employeeList = [{}];

employeeList[0] = {
  emp_id: 101,
  emp_name: "sam",
  comp_name: "Comm",
};

employeeList[1] = {
  emp_id: 102,
  emp_name: "adam",
  comp_name: "Telmn",
};

employeeList[2] = {
  emp_id: 103,
  emp_name: "roger",
  comp_name: "Comm",
};

employeeList[3] = {
  emp_id: 104,
  emp_name: "monte",
  comp_name: "Telmn",
};

employeeList[4] = {
  emp_id: 106,
  emp_name: "kassing",
  comp_name: "Comm",
};

function employeeAttendence() {
  for (let employee of employeeList) {
    let attendenceGenerator = Math.round(Math.random());
    employee.attendence = attendenceGenerator == 1 ? "Present" : "Absent";
  }

  menuDisplay();
}

function employeeDailyWage() {
  for (let employee of employeeList) {
    if (employee.attendence == "Present") {
      let fullDayHour = 8;
      let wagePerHour = 20;
      employee.wage = fullDayHour * wagePerHour;
    } else {
      employee.wage = 0;
    }
  }

  menuDisplay();
}

function addPartTimeEmployee() {
  for (let employee of employeeList) {
    let partTimeAttendence = Math.round(Math.random() * 2);
    if (partTimeAttendence == 2) {
      employee.attendence = "Present Part Time";

      let partTimeHour = 4;
      let wagePerHour = 20;
      employee.wage = partTimeHour * wagePerHour;
    }
  }

  menuDisplay();
}

function menuDisplay() {
  console.log("Welcome to Employee Wage Computation Program");
  let choice = question(
    "Display Menu :-\n 1) Check Employee Attendence \n 2) Calculate Daily Employee Wage \n 3) Add Part Time Employee and Wage \n"
  );

  if (choice == 1) {
    employeeAttendence();
  } else if (choice == 2) {
    employeeDailyWage();
  } else if (choice == 3) {
    addPartTimeEmployee();
  }
}
menuDisplay();
