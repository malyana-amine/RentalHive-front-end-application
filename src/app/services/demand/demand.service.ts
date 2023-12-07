import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemandService {
  url: string = "http://localhost:8080/api/demands";

  constructor(private _http: HttpClient) { }

  getDemands(): Observable<any> {
    return this._http.get(this.url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    )
  }

  updateDemand(demand: any): Observable<any> {
    demand.status = "Approved";
    return this._http.put(this.url + `/${demand.id}`, demand).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";

    if (err.error instanceof ErrorEvent) {
      errorMessage = "An error occurred = " + err.error.message;
    } else {
      errorMessage = `Server response with code = ${err.status} and message = ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}