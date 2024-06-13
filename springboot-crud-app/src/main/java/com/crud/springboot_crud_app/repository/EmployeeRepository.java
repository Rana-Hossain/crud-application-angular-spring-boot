package com.crud.springboot_crud_app.repository;

import com.crud.springboot_crud_app.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
