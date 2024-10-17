class Employee {
  constructor(emp_id, emp_name, comp_name) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.comp_name = comp_name;
  }

  employeeAttendence() {
    let attendenceGenerator = Math.round(Math.random());
    this.attendence = attendenceGenerator == 1 ? "Present" : "Absent";
  }

  employeeDailyWage() {
    if (this.attendence == "Present") {
      let fullDayHour = 8;
      let wagePerHour = 20;
      this.wage = fullDayHour * wagePerHour;
    } else {
      this.wage = 0;
    }
  }

  addPartTimeEmployee() {
    let partTimeAttendence = Math.round(Math.random() * 2);
    if (partTimeAttendence == 2) {
      this.attendence = "Present Part Time";

      let partTimeHour = 4;
      let wagePerHour = 20;
      this.wage = partTimeHour * wagePerHour;
    }
  }

  addPartTimeEmployeeSwitchCase() {
    let partTimeAttendence = Math.round(Math.random() * 2);
    switch (partTimeAttendence) {
      case 2:
        this.attendence = "Present Part Time";
        let partTimeHour = 4;
        let wagePerHourPartTime = 20;
        this.wage = partTimeHour * wagePerHourPartTime;

        break;

      case 1:
        this.attendence = "Present";
        let fullDayHour = 8;
        let wagePerHourFullTime = 20;
        this.wage = fullDayHour * wagePerHourFullTime;

        break;

      case 0:
        this.attendence = "Absent";
        this.wage = 0;
    }
  }

  employeeWageForMonth() {
    let day = 0;
    this.monthWage = 0;
    while (day < 20) {
      let employeeAttendence = Math.round(Math.random() * 2);

      if (employeeAttendence == 2) {
        let partTimeHour = 4;
        let wagePerHourPartTime = 20;
        this.monthWage += partTimeHour * wagePerHourPartTime;
      } else if (employeeAttendence == 1) {
        let fullDayHour = 8;
        let wagePerHourFullTime = 20;
        this.monthWage += fullDayHour * wagePerHourFullTime;
      } else if (employeeAttendence == 0) {
        this.monthWage += 0;
      }
      day++;
    }
  }

  employeeWageForMonthWithCondition() {
    let day = 0;
    let workingHour = 0;
    this.monthWage = 0;
    while (day < 20 && workingHour < 100) {
      let employeeAttendence = Math.round(Math.random() * 2);

      if (employeeAttendence == 2) {
        let partTimeHour = 4;
        let wagePerHourPartTime = 20;
        this.monthWage += partTimeHour * wagePerHourPartTime;
        day++;
        workingHour += 4;
      } else if (employeeAttendence == 1) {
        let fullDayHour = 8;
        let wagePerHourFullTime = 20;
        this.monthWage += fullDayHour * wagePerHourFullTime;
        day++;
        workingHour += 8;
      } else if (employeeAttendence == 0) {
        this.monthWage += 0;
        day++;
        workingHour += 0;
      }
    }
  }
}

let employeeList = [{}];

employeeList[0] = new Employee(101, "sam", "Comm");
employeeList[1] = new Employee(102, "adam", "Telmn");
employeeList[2] = new Employee(103, "roger", "Comm");
employeeList[3] = new Employee(104, "monte", "Telmn");
employeeList[4] = new Employee(102, "kassing", "Comm");

for (let employee of employeeList) {
  employee.employeeAttendence();
  employee.employeeDailyWage();
  employee.addPartTimeEmployee();
  employee.addPartTimeEmployeeSwitchCase();
  employee.employeeWageForMonth();
  employee.employeeWageForMonthWithCondition();
}
