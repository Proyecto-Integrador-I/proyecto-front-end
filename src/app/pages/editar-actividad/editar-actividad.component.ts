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

  constructor(private router:Router, private serviceActividad:ActividadService, private serviceCurso: CursoService) { }

  ngOnInit() {
     this.setearCampos();
  }
  setearCampos(){
    const id = localStorage.getItem('idActividad');
    let arregloDeSubCadenas, dia, mes, anio;
      $('select').material_select('destroy');
      // this.serviceCurso.getCursosId(id)
      this.serviceCurso.getCursos()
        .subscribe(data =>{
              this.resultadoCursos = data;
             // $('select').material_select();
          }
        );
      this.serviceActividad.getActividadId(+id)
        .subscribe(data =>{
          this.actividad = data[0];
          arregloDeSubCadenas = this.actividad.fecha.split('/')
          dia = arregloDeSubCadenas[0];
          mes = arregloDeSubCadenas[1];
          if(mes < 10){
            mes = '0'+ mes;
          }
          anio = arregloDeSubCadenas[2];
          this.fecha = anio + '-' + mes + '-' + dia;
        })
  }

  onEditar(form: NgForm): void{
    /*
    if(form.valid){
      this.service.registrarActividad(this.actividad)
        .subscribe(data=>{
          alert('¡ Actividad registrada con éxito !');
          this.router.navigate(['actividades']);
        });

    }else{
      alert('Formulario no valido, por favor llene los campos');
    } */
  }
  atras(){
    this.router.navigate(['actividades']);
  }

}
