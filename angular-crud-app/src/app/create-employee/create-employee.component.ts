import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeServiceService} from "../employee-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(private emplpyeeService:EmployeeServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  addEmployeeData()
  {
    this.emplpyeeService.addEmployee(this.employee).subscribe(data=>{
      alert("Emplayee added successfully!");
      this.gotoListEmployeePage();

    },error => alert("Sorry unable to add the employee!"));
  }

  gotoListEmployeePage()
  {
    this.router.navigate(['/employee'])
  }

}
