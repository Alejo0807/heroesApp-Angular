import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }
  
  constructor(private http: HttpClient) {}

  verifyAuth(): Observable<boolean> {
    const url = `${this.apiUrl}/usuarios/1`

    if (!localStorage.getItem('auth')) {
      // console.log(this._auth)
      return of(false);
    }

    return this.http.get<Auth>(url)
            .pipe(
                map( auth => {
                  this._auth = auth;
                  return true; 
                })
            );
  }
  
  login( id: string ): Observable<Auth> { 
    const url = `${this.apiUrl}/usuarios/${ id }`
    return this.http.get<Auth>(url)
            .pipe(
                tap( auth => this._auth = auth),
                tap( auth => localStorage.setItem('auth', auth.id.toString()))
            );
  }

  logout() {
    localStorage.removeItem('auth');
    this._auth = undefined;
  }


}
