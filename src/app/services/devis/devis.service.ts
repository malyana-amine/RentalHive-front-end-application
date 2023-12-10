import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponseModel} from "../../core/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  private api = "http://localhost:8080/api/";
  private devis:Devis | null = null;

  constructor(private http: HttpClient) { }

  public getDevis(): Observable<Devis[]> {
    return this.http.get<ApiResponseModel<Devis[]>>(this.api + "devis").pipe(
      map(res => res.data )
    );
  }
  // public generateDevis(demandId: number): Observable<Devis> {
  //   return this.http.post<Devis>(this.api + `devis/${demandId}/generate`, demandId);
  // }
  // public updateExpiredDevis(): Observable<Devis> {
  //   return this.http.post<Devis>(this.api + `devis/update`, null);
  // }
  // public acceptDevis(devisId: number): Observable<Devis> {
  //     return this.http.post<Devis>(this.api + `devis/accept/${devisId}`, null);
  // }
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
