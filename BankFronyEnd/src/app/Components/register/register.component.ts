import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetails } from 'src/app/Interfaces/customerDetails';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:CustomerDetails;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.register=new CustomerDetails;
  }

}
