import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  public title:string;
  public valor_dos:any;
  // con Input indicamos que el valor nos va llegar desde a fuera del componente hijo
  @Input() propiedad_uno:string;
  @Input() propiedad_dos:string;
  // puedo asignar un atributo html
  // @Input('texto1') propiedad_uno: string;
  // @Input('texto2') propiedad_dos: string;
  // Y es posible enviarle informacion con esos nombres desde los componentes padres ejemplo [texto1]="'Enviado texto'"
  @Output() desde_el_hijo = new EventEmitter();

  constructor() { 
    this.title = "Componente hijo"
  }
  ngOnInit(){
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);
    this.valor_dos = this.propiedad_dos;
    this.enviar();
  }

  /* por medio de enviar() pasare este objeto al padre*/
  enviar(){
    this.desde_el_hijo.emit({
      nombre:'Github',
      web:'www.github.com',
      twitter:'@github'
      });
  }
}
