package com.crud.springboot_crud_app.mapper;

import com.crud.springboot_crud_app.dto.EmployeeDto;
import com.crud.springboot_crud_app.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToemployeeDto(Employee employee)
    {
        return  new EmployeeDto(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail()
        );
    }

    public static Employee mapToemployee(EmployeeDto employeeDto)
    {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstname(),
                employeeDto.getLastname(),
                employeeDto.getEmail()
        );
    }

}
