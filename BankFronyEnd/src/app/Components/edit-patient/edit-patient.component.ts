import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerDetails } from 'src/app/Interfaces/customerDetails';
import { CustomerService } from 'src/app/Services/customer.service';
import { PatientService } from 'src/app/Services/patient.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  customer: CustomerDetails = new CustomerDetails;
  // edit:boolean = false;
  // editPatient: FormGroup;

  // durationInSeconds =5;
  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  // verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private customerService: CustomerService, private _router: Router) {


  }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem("details"));
  }

  updateProfile() {
    this.customerService.updateProfile(this.customer)
      .subscribe(
        res => {
          console.log("Base response" + JSON.stringify(res));
          if (res.statusCode == 200) {
            alert(res.statusMessage);
            this._router.navigate(['/create'])
          }
        },
        err => console.log(err)
      )

  }

}
