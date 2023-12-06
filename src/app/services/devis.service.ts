import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  private api = "http://localhost:8080/api/";
  private devis:Devis | null = null;

  constructor(private http: HttpClient) { }

  getDevis(): Observable<Devis[]> {
    return this.http.get<Devis[]>(this.api + "devis");
  }
}

export class ResponseModel<T> {
  message!: string;
  result!: T;
  error!: object
}

export interface Devis{
  id?: number;
  status?:string;
  priceTotal?:number;
  contract?:object;
}
