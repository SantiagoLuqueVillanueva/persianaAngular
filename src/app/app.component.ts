import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from "./components/habitacion/habitacion.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'persianaAngular';
  corrienteVivienda = false;
  corrienteHabitacion = false;
  estadoPersianaRecibido = false;

  onConectarDesconectar(event: Event) {
    let conDes = event.target as HTMLButtonElement;

    this.corrienteVivienda = !this.corrienteVivienda;
    conDes.innerText = this.corrienteVivienda ? 'Desconectar' : 'Conectar';
  }

  onConectarDesconectarHab(event: Event) {
    let conDes = event.target as HTMLButtonElement;

    if (this.corrienteVivienda) {
      this.corrienteHabitacion = !this.corrienteHabitacion;
      conDes.innerText = this.corrienteHabitacion ? 'Desconectar' : 'Conectar';
    }
  }

  onEstadoPersiana(estado: boolean) {
    this.estadoPersianaRecibido = estado;
  }
}
