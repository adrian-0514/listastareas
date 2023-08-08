import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponeteTareasComponent } from './componete-tareas/componete-tareas.component';
import { TareasizComponent } from './tareasiz/tareasiz.component';
import { TareasdeComponent } from './tareasde/tareasde.component';



@NgModule({
  declarations: [
    ComponeteTareasComponent,
    TareasizComponent,
    TareasdeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ComponeteTareasComponent]
})
export class TareasModule { }
