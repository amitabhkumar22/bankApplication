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
import { UserLoanDetails } from 'src/app/Interfaces/userLoanDetails';
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
  selectedLoan: LoanDetails;
  userLoans: UserLoanDetails[];
  appliyingLoan: UserLoanDetails = new UserLoanDetails;
  loanDetails: boolean = true;
  personal: boolean = false;
  showLoanApply: boolean = false;
  index: number;

  constructor(private customerService: CustomerService, private _router: Router) { }

  ngOnInit(): void {
    this.personal = false;
    this.loanDetails = true;
    this.showLoanApply = false;
    this.customer = JSON.parse(localStorage.getItem("details"));
    this.customer.accountType
    this.customerService.getLoans(this.customer.accountType)
      .subscribe(
        res => {
          console.log("Base response" + res);
          this.loans = res;
        },
        err => console.log(err)
      )
  }
  getAppliedLoans() {
    this.loanDetails = false;
    this.personal = true;
    this.showLoanApply = false;
    this.customerService.getAppliedLoans(this.customer.profilId)
      .subscribe(
        res => {
          console.log("Base response" + JSON.stringify(res));
          this.userLoans = res;
        },
        err => console.log(err)
      )
  }
  applyLoan(i: number) {
    this.showLoanApply = true;
    this.selectedLoan = this.loans[i];
    console.log("selected loan " + JSON.stringify(this.appliyingLoan));
    this.appliyingLoan.accountType = this.selectedLoan.accountType
    this.appliyingLoan.amount = this.selectedLoan.amount
    this.appliyingLoan.rateOfIntrest = this.selectedLoan.rateOfIntrest
    console.log("selected loan and details" + JSON.stringify(this.appliyingLoan));
  }
  applyingLoan() {
    this.loanDetails = false;
    this.personal = true;
    this.appliyingLoan.profileId = this.customer.profilId;
    this.customerService.applyingLoan(this.appliyingLoan)
      .subscribe(
        res => {
          console.log("Base response" + JSON.stringify(res));
          if (res.statusCode == 200)
            alert(res.statusMessage)
        },
        err => console.log(err)
      )
  }
  changeTime(time: number) {
    console.info(time)
    const date = new Date(time);
    return date.toLocaleString('sv');
  }
  close() {
    this.showLoanApply = false;
  }
}