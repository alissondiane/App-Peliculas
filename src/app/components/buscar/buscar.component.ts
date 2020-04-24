import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  buscar:string = "";


  constructor(public peliculasService: PeliculasService,
    private route: ActivatedRoute) { 

      this.route.params.subscribe(parametros =>{
        console.log(parametros);
        if(parametros['termino']){
          this.buscar = parametros['termino'];
          this.buscarPelicula();
        }
      })
    }

  ngOnInit(): void {
  }
  buscarPelicula(){
    console.log(this.buscar);
    if(this.buscar.length==0){
      console.log("CADENA VACIA");
      return;
    }
    this.peliculasService.buscarPelicula(this.buscar)
    .subscribe();
  }

}
