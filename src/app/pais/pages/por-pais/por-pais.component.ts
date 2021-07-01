import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = "Hello";
  hayError:boolean = false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(
    private _paisSerive: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;


    this._paisSerive.buscarPais(this.termino).subscribe(
      (paises) =>{
        this.paises = paises;

      }, (error) =>{
        this.paises = [];
        this.hayError = true;
      }
    );
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this._paisSerive.buscarPais(termino).subscribe(
      paises =>{
        this.paisesSugeridos = paises.splice(0,5);
      },
      error =>{
        this.paisesSugeridos = [];
      }
    );

  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}
