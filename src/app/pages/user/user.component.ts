import { Component, OnInit } from "@angular/core";
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {ActividadService} from "../../services/actividad.service";
import {Actividad} from '../../model/Actividad';
import {CursoService} from "../../services/curso.service";
import {Curso} from "../../model/Curso";

declare var $:any;

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  actividad: Actividad = new Actividad();
  resultadoCursos: Curso[];
  id: string;
  tipos: string[] = ['Grupal', 'Asesoría', 'Clase', 'Examen', 'Laboratorio', 'Salida', 'Otro'];

  constructor(private router:Router, private serviceActividad:ActividadService, private serviceCurso: CursoService) {}

  public isError = false;

  ngOnInit() {
    this.setearCampos();
  }
  setearCampos(){
     this.id = localStorage.getItem('idCurso');
    if(this.id === '0'){
      $('select').material_select('destroy');
      this.serviceCurso.getCursos()
        .subscribe(data =>{
            this.resultadoCursos = data;
          }
        );
    }else{
      $('select').material_select('destroy');
      this.serviceCurso.getCursos()
        .subscribe(data =>{
            this.resultadoCursos = data;

          }
        );


      this.serviceActividad.getActividadId(+this.id)
        .subscribe(data =>{
          this.actividad = data[0];
        })
    }
  }

  onRegistrar(form: NgForm): void{
    if(form.valid){
      this.actividad.curso = this.id.split('-')[0].trim();
      this.actividad.docente = this.actividad.docente.split('-')[0].trim();
      this.serviceActividad.registrarActividad(this.actividad)
        .subscribe(data=>{
          alert('¡ Actividad registrada con éxito !');
          this.router.navigate(['actividades']);
        });

    }else{
      alert('Formulario no valido, por favor llene los campos');
    }
  }

  atras(){
      this.router.navigate(['actividades']);
  }

}
