import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "../model/Curso";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  url = environment.REGISTRO_API_URL + '/cursos';

  getCursos() {
    return this.http.get<Curso[]>(this.url);
  }
}
