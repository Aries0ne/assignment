import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  @Input() employee: any;  
  @Output() employeeDeleted: EventEmitter<void> = new EventEmitter<void>();  

  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    console.log('Employee data received:', this.employee); 
  }

  deleteEmployee(): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(this.employee.id).subscribe(() => {
        this.employeeDeleted.emit();  
        alert('Employee deleted successfully');
      });
    }
  }
}
