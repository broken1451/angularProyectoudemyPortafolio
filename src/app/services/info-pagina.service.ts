import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, InfoPagina1 } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: InfoPagina1[] = [];

  constructor(private http: HttpClient) {

    console.log('AQUI ESTA EL SERVICIO InfoPaginaService Y FUNCIONA');

    // leer el archivo JSON
    /*
        this.http.get('assets/data/data-pagina.json').subscribe((res: InfoPagina) => {
            // console.log(res);
            // console.log(res.['titulo']);
            console.log(res.titulo);
            console.log(res.tumbler);
            this.cargada = true;
            this.info = res;
            console.log(res);
          });
*/
          this.cargarInfo();
          this.cargarEquipo();
   }

   private cargarInfo() {
     // leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe((res: InfoPagina) => {
      // console.log(res);
      // console.log(res.['titulo']);
      console.log(res.titulo);
      console.log(res.tumbler);
      this.cargada = true;
      this.info = res;
      console.log(res);
    });
   }

   private cargarEquipo() {
         // leer el archivo JSON
         this.http.get('https://angular-html-86d98.firebaseio.com/Equipo.json')
         .subscribe((res1: any[]) => {
          // console.log(res);
          // console.log(res.['titulo']);
          this.equipo = res1;
          console.log(res1);
   });
}
}
