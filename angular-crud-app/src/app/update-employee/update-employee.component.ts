import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute,private employeeService:EmployeeServiceService,private router:Router) { }

  id!: number;
  employee: Employee = new Employee();

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee)
    })
  }

  updateEmployeeData()
  {
    this.employeeService.updateEmployeeDataApi(this.employee).subscribe(data=>{
      alert("Update Successfully");
      this.router.navigate(['/']);
    },error=>alert("Unable to Update Data"));
  }

}
