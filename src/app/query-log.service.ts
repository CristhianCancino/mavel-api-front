import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryLogService {
  private apiUrl = 'URL_DE_TU_API_AQUI'; // Reemplaza esto con la URL real de tu API

  constructor(private http: HttpClient) { }

  saveQuery(queryDetails: any): Observable<any> {
    // Hacer una solicitud POST a tu API para guardar la consulta
    return this.http.post(`${this.apiUrl}/saveQuery`, queryDetails);
  }

  getQueryLog(): Observable<any[]> {
    // Hacer una solicitud GET a tu API para obtener la bitácora de consultas
    return this.http.get<any[]>(`${this.apiUrl}/getQueryLog`);
  }
}