import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string = "Hello";
  hayError:boolean = false;
  paises:Country[] = [];

  constructor(
    private _paisSerive: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this._paisSerive.buscarCapital(this.termino).subscribe(
      (paises) =>{
        this.paises = paises;

      }, (error) =>{
        this.paises = [];
        this.hayError = true;
      }
    );
  }



}
