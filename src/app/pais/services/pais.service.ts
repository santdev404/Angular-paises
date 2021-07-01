import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = "https://restcountries.eu/rest/v2";

  constructor(private _http: HttpClient) { 

  }

  get httpParams(){
    return  new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population')
  }



  buscarPais(termino:string): Observable<Country[]>{

    const  url = `${this.apiUrl}/name/${termino}`;

    return this._http.get<Country[]>(url, {params: this.httpParams });

    // return this._http.get(url).pipe(
    //   catchError(err=> of([]))
    // )

  }

  buscarCapital(termino:string): Observable<Country[]>{

    const  url = `${this.apiUrl}/capital/${termino}`;

    return this._http.get<Country[]>(url, {params: this.httpParams });

  }

  getPaisPorAlpha(termino:string): Observable<Country>{

    const  url = `${this.apiUrl}/alpha/${termino}`;

    return this._http.get<Country>(url);

  }

  getPaisPorRegion(region:string): Observable<Country[]>{

    

    const  url = `${this.apiUrl}/region/${region}`;

    return this._http.get<Country[]>(url,{params: this.httpParams })
      .pipe(
        tap(console.log)
      );

  }

}
