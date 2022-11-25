import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerDetails } from 'src/app/Interfaces/customerDetails';
import { IPatients } from 'src/app/Interfaces/IPatient';
import { LoanDetails } from 'src/app/Interfaces/LoanDetails';
import { CustomerService } from 'src/app/Services/customer.service';
import { PatientService } from 'src/app/Services/patient.service';
import * as XLSX from 'xlsx'
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  customer: CustomerDetails = new CustomerDetails;
  loans: LoanDetails[];
  loanDetails: boolean = true;
  personal: boolean = false;

  constructor(private customerService: CustomerService, private _router: Router) { }

  ngOnInit(): void {

    // this.customer = JSON.parse(localStorage.getItem("details"));
    // this.customer.accountType
    this.customerService.getLoans("PERSONAL")
      .subscribe(
        res => {
          console.log("Base response" + res);
          this.loans = res;
        },
        err => console.log(err)
      )
  }
}