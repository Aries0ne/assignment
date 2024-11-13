import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employees: any[], department: string): any[] {
    if (!employees || !department) {
      return employees;
    }
    return employees.filter(employee =>
      employee.department.toLowerCase().includes(department.toLowerCase())
    );
  }
}
