import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { url_constants } from '../Constants/url_constants';
import { baseResponse } from '../Interfaces/BaseResponse';
import { IUser } from '../Interfaces/IUser';
import { LoginCredentials } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private _router: Router) { }

  loginUser(user: LoginCredentials) {
    return this.http.post<baseResponse>(url_constants.LOGIN, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    // location.reload();
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
