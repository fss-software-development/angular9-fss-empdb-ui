import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeCommandHandlerService } from '../../services';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  submitted = false;

  constructor(
    private route: ActivatedRoute,private router: Router,
    private commandHandlerService: EmployeeCommandHandlerService,
    ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.commandHandlerService.getEmployee(this.id);
  }

  updateEmployee() {
    this.commandHandlerService.updateEmployee(this.id, this.employee);
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}