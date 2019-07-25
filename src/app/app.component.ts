import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'selectApp';

  public exampleData: Array<Select2OptionData>;
  public options: Select2Options;
  public value: string[];
  public current: string;

  /* LO QUE SE HIZO:
    1. Instalacion de ng2-select2: npm i ng2-select2
    2. lo importe al app.module. ts:

    import { Select2Module } from 'ng2-select2';
    @NgModule({
        imports: [
          ....,
          Select2Module
        ],
        ...
      })
      3. Importas en app.ts:  import { Select2OptionData } from 'ng2-select2';
      4. Agregue la maquetacion en HTML > revisa app.html
      5. Lo que entendi de este select multiple es que no hace falta el ngFor porq en el HTML
          Puedes agregar la opcion [data]='exampleData', lo que te ahorra el iterar en un ngFor para pintar las opciones del select
      6. Aqui hay mas detalle: https://www.npmjs.com/package/ng2-select2
  */
  ngOnInit() {
    // DATA FALSA, es la que se muestra en el select
    this.exampleData = [
      {
        id: 'multiple1',
        text: 'Multiple 1'
      },
      {
        id: 'multiple2',
        text: 'Multiple 2'
      },
      {
        id: 'multiple3',
        text: 'Multiple 3'
      },
      {
        id: 'multiple4',
        text: 'Multiple 4'
      }
    ];
      // Valores que le asigno por defecto al select
    this.value = ['multiple2', 'multiple4'];

    this.options = {
      multiple: true
    };

    this.current = this.value.join(' | ');
  }
      // ESTE METODO ES QUE EL CAPTURA LAS OPCIONES QUE SE VAN SELECCIONANDO EN EL SELECT MULTIPLE
      changed(data: {value: string[]}) {
        this.current = data.value.join(' | ');
      }



}




