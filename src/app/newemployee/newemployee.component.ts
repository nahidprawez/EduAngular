import { Component, OnInit } from '@angular/core';
import { newEmp } from './employee2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit{
  employees: newEmp[] = [];
  constructor(private employeeService : ApiService) {}

    ngOnInit(): void {
       this.getEmployees();
    }

    getEmployees(): void {
      console.log(this.employees, "emp")
       this.employeeService.getEmployees().subscribe(response=> {
        this.employees = response;
        console.log(response, "employees")
        console.log(this.employees, "emp")
      })
    }
}
