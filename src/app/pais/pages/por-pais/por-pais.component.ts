import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string = "Hello";

  constructor(
    private _paisSerive: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    this._paisSerive.buscarPais(this.termino).subscribe(
      response =>{
        console.log(response);
      }, error =>{
        console.log(error);
      }
    );
  }

}
