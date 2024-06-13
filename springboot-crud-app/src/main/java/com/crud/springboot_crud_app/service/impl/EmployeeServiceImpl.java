package com.crud.springboot_crud_app.service.impl;

import com.crud.springboot_crud_app.dto.EmployeeDto;
import com.crud.springboot_crud_app.entity.Employee;
import com.crud.springboot_crud_app.execption.ResourceNotFoundException;
import com.crud.springboot_crud_app.mapper.EmployeeMapper;
import com.crud.springboot_crud_app.repository.EmployeeRepository;
import com.crud.springboot_crud_app.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee= EmployeeMapper.mapToemployee(employeeDto);
        Employee savedEmployee= employeeRepository.save(employee);

        return EmployeeMapper.mapToemployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Employee with "+employeeId +"ID Not Found"));
        return EmployeeMapper.mapToemployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map((employee)-> EmployeeMapper.mapToemployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResourceNotFoundException("Employee with "+employeeId +"ID Not Found")
        );

        employee.setFirstname(updatedEmployee.getFirstname());
        employee.setLastname(updatedEmployee.getLastname());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj= employeeRepository.save(employee);

        return EmployeeMapper.mapToemployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResourceNotFoundException("Employee with "+employeeId +"ID Not Found")
        );

        employeeRepository.deleteById(employeeId);
    }


}
