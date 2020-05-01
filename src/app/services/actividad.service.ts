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
    return this.http.get<Actividad[]>(this.url)
  }
}
