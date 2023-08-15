import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  public tareas=[
    {tarea:'cepillarse',
    estado:false
   },
   {
    tarea:'bañarse',
    estado:false
   },
   {
    tarea:'desayunar',
    estado:false
   },
   {
    tarea:'transportarse',
    estado:false
   },
   {
    tarea:'trabajar',
    estado:false
   },
   {
    tarea:'mirar la hora',
    estado:false
   },
   {
    tarea:'almorzar',
    estado:false
   }

  ]

  constructor() { }

  public completarTarea(i:any){
	const tarea = this.tareas.find(tarea=>{
		return tarea.tarea===i
	})!
	tarea.estado=!tarea.estado
	console.log(this.tareas);
  }

  public tareascompletadas(){
	let can = 0;
	this.tareas.forEach(t=>{
		if (t.estado){
			can++;
		}
	})
	return can;
  }
  public insertar(nt:any){
	let data={
    tarea:nt,
    estado:false 
	}
	this.tareas.push(data)
  }
}
