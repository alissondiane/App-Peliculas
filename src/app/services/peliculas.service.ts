import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  peliculas: any[] = [];
  private apikey: string = "312297178ee253adc6a1e6762b8d26ed";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";

  constructor(private http: HttpClient) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    //let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    // let hastaStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let desdeStr = desde.toISOString().substring(0, 10);
    let hastaStr = hasta.toISOString().substring(0, 10);

    console.log(desdeStr);
    console.log(hastaStr);
    let url = `${this.urlMoviedb}discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.get(url)
      .pipe(map((res: any) => res.results));

  }

  getPopulares() {
    let url = `${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  }


  getPopularesNinos() {
    // let url = `${ this.urlMoviedb }discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    let url = `${this.urlMoviedb}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    console.log(url);
    return this.http.get(url)
      .pipe(map((res: any) => res.results));
  }
  
  buscarPelicula(texto: string) {
    let  url = `${ this.urlMoviedb }search/movie?api_key=${ this.apikey }&query=${texto}&language=es`;
    // tslint:disable-next-line: max-line-length
    return this.http.get( url ).pipe( map( (res: any) => 
    { this.peliculas = res.results;
      console.log("URI ACTUALIZADO");
      console.log(this.peliculas); 
      return res.results; } 
    ));

  }
  getPelicula(id: string) {
    let url = `${this.urlMoviedb}movie/${id}?api_key=${this.apikey}&language=es`;

    return this.http.get(url)
      .pipe(map((res: any) => res));
  }
}
