import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeService, Employee } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>(this.employees);
  displayedColumns: string[] = ['name', 'email', 'department', 'joiningDate', 'actions'];

  departmentFilter: string = '';  

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      console.log('API response:', data);
      this.employees = data;
      this.dataSource.data = [...this.employees];
      this.applyFilter(); 
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.fetchEmployees();
    });
  }
  applyFilter() {
    if (this.departmentFilter) {
      this.dataSource.filter = this.departmentFilter.trim().toLowerCase();
    } else {
      this.dataSource.filter = '';  
    }
  }

  onDepartmentChange(department: string) {
    this.departmentFilter = department;
    this.applyFilter(); 
  }

   openAddEmployeeForm() {
    this.router.navigate(['/add-employee']);  
  }
}
