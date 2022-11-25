import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_constants } from '../Constants/url_constants';
import { baseResponse } from '../Interfaces/BaseResponse';
import { CustomerDetails } from '../Interfaces/customerDetails';
import { LoanDetails } from '../Interfaces/LoanDetails';
import { UserLoanDetails } from '../Interfaces/userLoanDetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  applyingLoan(appliyingLoan: UserLoanDetails) {
    return this.http.post<baseResponse>(url_constants.GETAPPLIEINGLOANS, appliyingLoan);
  }
  getAppliedLoans(profileId: number) {
    return this.http.get<UserLoanDetails[]>(url_constants.GETAPPLIEDLOANS + profileId);
  }
  registration(register: CustomerDetails) {
    return this.http.post<baseResponse>(url_constants.REGISTER, register);
  }

  constructor(private http: HttpClient) { }
  getLoans(accountType: string) {
    return this.http.get<LoanDetails[]>(url_constants.GETLOANS + accountType);
  }
}
