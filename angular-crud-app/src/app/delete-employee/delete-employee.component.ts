import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  //id! : number;
  //employee : Employee = new Employee();

  constructor(private activeRouter:ActivatedRoute,private employeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
    //this.id = this.activeRouter.snapshot.params['id'];
    //console.log(this.id);
  }

  // DeleteEmployee() {
  //   this.employeeService.DeleteEmployeeApi(this.id).subscribe(data=>{
  //     alert("Employee Delete Successfully");
  //     //this.router.navigate(['/']);
  //   },error =>alert("Something Is Wrong Try Again"));
  // }
}
