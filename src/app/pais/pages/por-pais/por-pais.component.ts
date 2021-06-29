import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string = "Hello";
  hayError:boolean = false;
  paises:Country[] = [];

  constructor(
    private _paisSerive: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    this.hayError = false;
    this._paisSerive.buscarPais(this.termino).subscribe(
      (paises) =>{
        this.paises = paises;

      }, (error) =>{
        this.paises = [];
        this.hayError = true;
      }
    );
  }

}
