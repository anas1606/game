import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient,
    private tokenService: TokenService) { }

  detail() {
    const headers = { 'Content-Type': 'application/json', 'Authorization': this.tokenService.getToken() };
    const id = this.tokenService.getUserId();
    /* this.http.post<any>('', body, { headers }).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.router.navigate(["/home"])
    }); */
  }
}
