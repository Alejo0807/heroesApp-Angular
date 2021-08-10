import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    const url = `${this.apiUrl}/heroes`
    return this.http.get<Hero[]>(url);
  }

  getHeroById( id: string ): Observable<Hero> {
    const url = `${this.apiUrl}/heroes/${ id }`
    return this.http.get<Hero>(url);
  }

  getHeroByRegex( regex: string ): Observable<Hero[]> {
    const url = `${this.apiUrl}/heroes?q=${ regex }&limit=6`
    return this.http.get<Hero[]>(url);
  }

  addHero( hero: Hero ): Observable<Hero> {
    const url = `${this.apiUrl}/heroes`
    return this.http.post<Hero>(url, hero);
  }
  
  updateHero( hero: Hero ): Observable<Hero> {
    const url = `${this.apiUrl}/heroes/${ hero.id }`
    return this.http.put<Hero>(url, hero);
  }

  deleteHero( id: string ): Observable<any> {
    const url = `${this.apiUrl}/heroes/${ id }`
    return this.http.delete<any>(url);
  }

}
