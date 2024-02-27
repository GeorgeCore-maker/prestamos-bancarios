import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../models/client";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DataService{

  private baseUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

  getClients(){
    return this.http.get(this.baseUrl)
  }
}
