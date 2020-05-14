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

  constructor(private router:Router, private service:ActividadService, private serviceCurso: CursoService) {}

  public isError = false;

  ngOnInit() {
    this.setearCampos();
  }
  setearCampos(){
    const id = localStorage.getItem('idCurso');
    console.log(id);
    if(id === '0'){
      $('select').material_select('destroy');
      this.serviceCurso.getCursos()
        .subscribe(data =>{
            this.resultadoCursos = data;
          }
        );
    }else{
      $('select').material_select('destroy');
      this.serviceCurso.getCursosId(id)
        .subscribe(data =>{
            this.resultadoCursos = data;
          }
        );
    }

    /*
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
     */
  }

  onRegistrar(form: NgForm): void{
    if(form.valid){
      this.service.registrarActividad(this.actividad)
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
