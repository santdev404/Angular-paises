import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = "https://restcountries.eu/rest/v2";

  constructor(private _http: HttpClient) { 

  }



  buscarPais(termino:string): Observable<Country[]>{

    const  url = `${this.apiUrl}/name/${termino}`;

    return this._http.get<Country[]>(url);

    // return this._http.get(url).pipe(
    //   catchError(err=> of([]))
    // )

  }

  buscarCapital(termino:string): Observable<Country[]>{

    const  url = `${this.apiUrl}/capital/${termino}`;

    return this._http.get<Country[]>(url);

  }

  getPaisPorAlpha(termino:string): Observable<Country>{

    const  url = `${this.apiUrl}/alpha/${termino}`;

    return this._http.get<Country>(url);

  }

}
