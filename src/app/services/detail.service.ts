import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  gameid: string = "";
  constructor(private http: HttpClient,
    private tokenService: TokenService) { }

  detail() {
    const headers = { 'Content-Type': 'application/json', 'Authorization': this.tokenService.getToken() };
    const id = this.tokenService.getUserId();
    return this.http.post<any>('http://localhost:8080/api/games-transection-per-game/' + id + '/' + this.gameid, id, { headers });
  }
}
