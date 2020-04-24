import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartelera:any;
  populares:any;
  popularesNinos:any;
  constructor(private peliculasService : PeliculasService) { 

    console.log("CONSULTA DE PELICULAS DE CARTELERA");
    this.peliculasService.getCartelera()
      .subscribe(data=>this.cartelera = data);
      
    this.peliculasService.getPopulares()
      .subscribe(data=>this.populares = data);

    this.peliculasService.getPopularesNinos()
      .subscribe(data=>{
        console.log("populares entre niños");
        this.popularesNinos = data;
        console.log(data);      
      });
  }
  ngOnInit(): void {

  }

}
