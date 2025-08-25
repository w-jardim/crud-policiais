import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Policial {
  id?: number;
  rg_civil: string;
  rg_militar: string;
  cpf: string;
  data_nascimento: string;
  matricula?: string;
}

@Injectable({ providedIn: 'root' })
export class PoliciaisService {
  // Usar proxy '/api' para evitar CORS em desenvolvimento
  private apiUrl = '/api/policiais';

  constructor(private http: HttpClient) {}

  cadastrarPolicial(policial: Policial): Observable<Policial> {
    return this.http.post<Policial>(this.apiUrl, policial).pipe(
      catchError(this.handleError)
    );
  }

  listarPoliciais(): Observable<Policial[]> {
    return this.http.get<Policial[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let msg = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      msg = `Erro: ${error.error.message}`;
    } else if (error.error && error.error.error) {
      msg = error.error.error;
    }
    return throwError(() => msg);
  }
}
