import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators'; // switchMap Operadores de transformacion, permite recibier un observable y regresar otro


import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _paisSerive: PaisService
  ) { }

  ngOnInit(): void {

  //   this._activatedRoute.params
  //     .subscribe(({id})=>{
        

  //       this._paisSerive.getPaisPorAlpha(id).subscribe(
  //         pais => {
  //           console.log(pais);
  //         }
  //       );

  //     });

  // }

  this._activatedRoute.params
    .pipe(
      switchMap(({id}) => this._paisSerive.getPaisPorAlpha(id)),
      tap(console.log)
    )
    .subscribe( pais => {
      this.pais = pais;
    });
  }

}
