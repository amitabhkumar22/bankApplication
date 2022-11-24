import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url_constants } from '../Constants/url_constants';
import { baseResponse } from '../Interfaces/BaseResponse';
import { LoanDetails } from '../Interfaces/LoanDetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  getLoans(accountType: string) {
    return this.http.get<LoanDetails[]>(url_constants.GETLOANS + accountType);
  }
}
