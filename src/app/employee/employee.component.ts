import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    employee : Employee = {
      employeeID : 11,
      firstName : "Nahid",
      lastName : "Prawez",
      salary : 30000,
      dob : new Date('1996-02-01'),
      email : "nahid123@gmail.com",
      action : "Edit",
    };

    showEdit : boolean = false;
    EditEmp() {
        this.showEdit = true;
    }
    UpdateEmp() {
       this.showEdit = false;
    }
}
