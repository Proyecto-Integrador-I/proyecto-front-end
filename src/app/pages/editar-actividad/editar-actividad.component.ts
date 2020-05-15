import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Actividad} from "../../model/Actividad";
import {Router} from "@angular/router";
import {ActividadService} from "../../services/actividad.service";
import {CursoService} from "../../services/curso.service";
import {Curso} from "../../model/Curso";

declare var $:any;

@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.scss']
})
export class EditarActividadComponent implements OnInit {
  actividad: Actividad= new Actividad();
  resultadoCursos: Curso[];
  fecha: string;
  id: string;

  constructor(private router:Router, private serviceActividad:ActividadService, private serviceCurso: CursoService) { }

  ngOnInit() {
     this.setearCampos();
  }
  setearCampos(){
    this.id = localStorage.getItem('idActividad');
    let arregloDeSubCadenas, dia, mes, anio;
      $('select').material_select('destroy');
      this.serviceCurso.getCursos()
        .subscribe(data =>{
              this.resultadoCursos = data;
          }
        );
      this.serviceActividad.getActividadId(+this.id)
      .subscribe(data =>{
        this.actividad = data[0];
        arregloDeSubCadenas = this.actividad.fecha.split('/')
        dia = arregloDeSubCadenas[0];
        mes = arregloDeSubCadenas[1];
        if(mes < 10){
          mes = '0'+ mes;
        }
        anio = arregloDeSubCadenas[2];
        this.actividad.fecha = anio + '-' + mes + '-' + dia;

        })
  }

  onEditar(form: NgForm): void{
    if(form.valid){
      this.actividad.curso = this.id.split('-')[0].trim();
      this.actividad.docente = this.actividad.docente.split('-')[0].trim();
      this.serviceActividad.actualizarActividad(this.actividad)
        .subscribe(data=>{
          alert('¡ Actividad actualizada con éxito !');
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
