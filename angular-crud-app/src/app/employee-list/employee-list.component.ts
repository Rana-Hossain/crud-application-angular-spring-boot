import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(private employeeService:EmployeeServiceService,private router: Router) { }

  employee : Employee[]=[];

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(data =>{
      this.employee=data;
    })
  }

  updateEmployee(id:number)
  {
    console.log(id);
    this.router.navigate(["update-employee",id]);
  }

  // deleteEmployee(id:number) {
  //   console.log(id);
  //   this.router.navigate(["delete-employee",id]);
  // }

  DeleteEmployee(id:number) {
    this.employeeService.DeleteEmployeeApi(id).subscribe(data=>{
      alert("Employee Delete Successfully");
      this.router.navigate(['/']);
    },error =>{
        console.error('There was an error!', error);
        alert("Something Is Wrong. Try Again");
    })
  }
}
