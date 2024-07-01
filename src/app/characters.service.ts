import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character.model';
import { environment } from '..//environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = environment.baseUrl + environment.charactersPath;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    console.log('Making request to:', this.charactersUrl);

    return this.http.get<Character[]>(this.charactersUrl).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }

  getCharacterById( id: string): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl + `/${id}` ).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }
}