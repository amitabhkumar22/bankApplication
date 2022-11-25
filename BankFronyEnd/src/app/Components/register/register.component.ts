import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetails } from 'src/app/Interfaces/customerDetails';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: CustomerDetails;

  constructor(private _router: Router, private service: CustomerService) { }

  ngOnInit(): void {
    this.register = new CustomerDetails;
  }
  registration() {
    this.register.accountType = this.register.accountType = 2 ? "PERSONAL" : "SALARY";
    console.info(JSON.stringify(this.register));
    this.service.registration(this.register)
      .subscribe(
        res => {
          console.log(res)
          if (res.statusCode == 200) {
            alert(res.statusMessage);
            this._router.navigate(['/login']);
          }
        }
      );

  }

}
