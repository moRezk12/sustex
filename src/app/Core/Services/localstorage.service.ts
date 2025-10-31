import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private tokenKey = 'authToken';

  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem(this.tokenKey));

  token$ = this.tokenSubject.asObservable();

  constructor() {}

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
    this.tokenSubject.next(null);
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!this.tokenSubject.value;
  }
}
