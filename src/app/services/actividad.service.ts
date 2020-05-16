import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Actividad} from '../model/Actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  url = environment.REGISTRO_API_URL + '/actividades';

  constructor(private http:HttpClient) { }

  getActividades(){
    return this.http.get<Actividad[]>(this.url);
  }

  getActividadesCursoId(id:number){
    console.log(id);
    return this.http.get<Actividad[]>(this.url + '/curso/' + id);
  }

  getActividadId(id:number){
    return this.http.get<Actividad>(this.url + '/' + id);
  }

  registrarActividad(actividad: Actividad){
    return this.http.post<Actividad>(this.url, actividad);
  }

  actualizarActividad(actividad: Actividad){
    return this.http.put<Actividad>(this.url, actividad);
  }

   eliminarActividad(actividad: Actividad){
    return this.http.delete<Actividad>(this.url + '/' + actividad.codigo);
  }
}
