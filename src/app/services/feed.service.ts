import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient,
    private tokenService: TokenService) { }

  feed() {
    const headers = { 'Content-Type': 'application/json', 'Authorization': this.tokenService.getToken() };
    /* this.http.post<any>('', body, { headers }).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.router.navigate(["/home"])
    }); */
  }

  categoryFilterFeed(categorys: any) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': this.tokenService.getToken() };
    /* this.http.post<any>('', body, { headers }).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.router.navigate(["/home"])
    }); */
  }
  
}
