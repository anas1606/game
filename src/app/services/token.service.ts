import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("token", "Bearer " + token);
  }

  getToken(): any {
    return localStorage.getItem("token");
  }

  setUserId(id: string) {
    localStorage.setItem("id", id);
  }

  getUserId(): any {
    return localStorage.getItem("id");
  }
}
