import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'isai';
  nombreUpper: string = 'ISAI';
  nombreCompleto: string = 'IsAi herNANdez';

  fecha: Date = new Date(); // el día de hoy

}
