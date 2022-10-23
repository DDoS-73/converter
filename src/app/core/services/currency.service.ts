import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, EMPTY, map, Observable, throwError } from "rxjs";
import { IResponse } from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {}

  convert(base: string, symbols: string, amount: number): Observable<number> {
    return this.http
      .get<IResponse>(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}&amount=${amount}`)
      .pipe(
        map(res => res.rates[symbols]),
        catchError(this.handleError)
      );
  }

  getCurrencies(): Observable<string[]> {
    return this.http.get<IResponse>('https://api.exchangerate.host/latest')
      .pipe(
        map(res => Object.keys(res.rates)),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.error);
    return throwError(() => EMPTY);
  }
}
