import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    // employee : Employee = {
    //   employeeID : 11,
    //   firstName : "Nahid",
    //   lastName : "Prawez",
    //   salary : 30000,
    //   dob : new Date('1996-02-01'),
    //   email : "nahid123@gmail.com",
    //   action : "Edit",
    // };

    emplist: any[] = [
      {
        employeeID : 11,
        firstName : "Nahid",
        lastName : "Prawez",
        salary : 30000,
        dob : new Date('1996-02-01'),
        email : "nahid123@gmail.com",
        action : "Edit",
      },
      {
        employeeID : 12,
        firstName : "Danish",
        lastName : "Prawez",
        salary : 40000,
        dob : new Date('1994-05-01'),
        email : "danishdev@gmail.com",
        action : "Edit",
      },
      {
        employeeID : 13,
        firstName : "Sameer",
        lastName : "Raza",
        salary : 50000,
        dob : new Date('1992-02-09'),
        email : "sameerdev@gmail.com",
        action : "Edit",
      },
      {
        employeeID : 14,
        firstName : "Anwar",
        lastName : "Prawez",
        salary : 28000,
        dob : new Date('1996-08-01'),
        email : "prawez@gmail.com",
        action : "Edit",
      }
    ]

    // showEdit : boolean = false;
    // EditEmp() {
    //     this.showEdit = true;
    // }
    // UpdateEmp() {
    //    this.showEdit = false;
    // }
}
