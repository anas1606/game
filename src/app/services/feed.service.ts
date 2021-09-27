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
    return this.http.get<any>('http://localhost:8080/api/games', { headers });
  }

  categoryFilterFeed(catid: any) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': this.tokenService.getToken() };
    return this.http.get<any>('http://localhost:8080/games/' + catid, { headers });
  }

  getCategoryList(){
    const headers = { 'Content-Type': 'application/json', 'Authorization': this.tokenService.getToken() };
    return this.http.get<any>('http://localhost:8080/game-category/', { headers });
  }
}
