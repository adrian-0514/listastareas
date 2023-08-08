import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareasde',
  templateUrl: './tareasde.component.html',
  styleUrls: ['./tareasde.component.css']
})
export class TareasdeComponent  {
public tareas:string[]=['cepillarse','bañarse','desayunar','transportarse','trabajar','mirar la hora','almorzar']

constructor () { }
}
