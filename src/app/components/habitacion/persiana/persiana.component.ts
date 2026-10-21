import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {
  estadoPersiana = false;
  corrienteHab = input<boolean>(false);
  estadoCambiado = output<boolean>();

  subirPersiana() {
    if (this.corrienteHab()) {
      this.estadoPersiana = true;
      this.estadoCambiado.emit(this.estadoPersiana);
    }
  }

  bajarPersiana() {
    if (this.corrienteHab()) {
      this.estadoPersiana = false;
      this.estadoCambiado.emit(this.estadoPersiana);
    }
  }
}
