import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';

interface Tarjeta {
  titulo:string;
  subtitulo:string;
  nro?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'Mi practica de Angular';
  public ArregloTarjetas:Tarjeta[]=[]

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:"Video 1", subtitulo:"Sub tituli Video1", nro:6},
      {titulo:"Video 2", subtitulo:"Sub tituli Video2"},
      {titulo:"Video 3", subtitulo:"Sub tituli Video3"}
    ]
  }

}
