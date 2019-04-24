import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'input-output';
  public dato_externo = "Programador Angular";
  public datos_del_hijo:any;
  public identity= {
    id:1,
    web:'github.com',
    tematica:'Desarrollo Web'

  };
  recibirDatos(event){
    console.log(event.nombre);
    this.datos_del_hijo = event;
  }
}
