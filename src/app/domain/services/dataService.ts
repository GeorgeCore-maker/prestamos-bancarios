import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  minimo: number = 100000; // Definir el monto mínimo del préstamo
  maximo: number = 5000000; // Definir el monto máximo del préstamo

  private baseUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  saveClient(client: Client): Observable<Client> {
    console.log(client);
        // Enviar los datos al servidor JSON
        return this.http.post<Client>(this.baseUrl, client);
  }

  getApprovedClients(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '?approved=true');
  }
}
