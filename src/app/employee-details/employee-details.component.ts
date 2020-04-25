import { Employee } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeCommandHandlerService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(
              private route: ActivatedRoute,private router: Router,
              private commandHandlerService: EmployeeCommandHandlerService
              ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.commandHandlerService.getEmployee(this.id);
  }

  list(){
    this.router.navigate(['employees']);
  }
}