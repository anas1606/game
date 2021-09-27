import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private tokenService: TokenService,
    private router: Router) { }

  login(body: any) {
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<any>('http://localhost:8080/api/auth', body, { headers }).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.router.navigate(["/home"])
    }); 
  }

  register(data: any) {
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<any>('http://localhost:8080/api/register', data, { headers }).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.router.navigate(["/home"])
    });
  }
}
