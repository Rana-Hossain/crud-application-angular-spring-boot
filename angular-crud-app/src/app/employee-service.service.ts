import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  baseUrl = 'http://localhost:8080/api/employees';

  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee)
  {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployeeDataApi(employee: Employee) {
    return this.httpClient.put(`${this.baseUrl}/${employee.id}`, employee);
  }

  // DeleteEmployeeApi(id: number) {
  //   return this.httpClient.delete(`${this.baseUrl}/${id}`);
  // }
  DeleteEmployeeApi(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' }); // Ensure responseType is 'text'
  }
}
