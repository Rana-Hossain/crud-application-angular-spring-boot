import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { PracticePurposeComponent } from './practice-purpose/practice-purpose.component';

const routes: Routes = [
  {path:'', component: EmployeeListComponent},
  {path:'employee', component: EmployeeListComponent},
  {path:'Practice', component: PracticePurposeComponent},
  {path:'addEmployee',component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'delete-employee/:id',component:DeleteEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
