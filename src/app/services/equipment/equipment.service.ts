import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  url: string = "http://localhost:8080/api/equipments";

  constructor(private _http: HttpClient) { }

  getEquipments(): Observable<any> {
    return this._http.get(this.url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    )
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
