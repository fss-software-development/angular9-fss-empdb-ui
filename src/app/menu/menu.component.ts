import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  welcomeMessage = 'Test';

   constructor(public loginService:AuthenticationService) { }
   
  ngOnInit() {

  }
}