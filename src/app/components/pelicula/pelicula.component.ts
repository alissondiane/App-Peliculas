import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresarA:string="";
  busqueda:string="";

  constructor(private peliculasService : PeliculasService,
    private route: ActivatedRoute) { 
    
      this.route.params.subscribe(parametros =>{
        console.log("PAGINA PELICULAS");
        console.log(parametros);
          this.regresarA = parametros['page'];
          if(parametros['busqueda']){
            this.busqueda = parametros['busqueda'];
          }
          
          this.peliculasService.getPelicula(parametros['id'])
            .subscribe(resp=>{
              this.pelicula = resp;
              console.log("PELICULA RECIBIDA");
              console.log(this.pelicula);
            })

      })
  }

  ngOnInit(): void {
  
  }
}
