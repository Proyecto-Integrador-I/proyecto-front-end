import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Actividad} from '../../model/Actividad';
import {ActividadService} from '../../services/actividad.service';

@Component({
  selector: 'app-typography',
  templateUrl: 'typography.component.html'
})
export class TypographyComponent implements OnInit {
  actividades: Actividad[];

  constructor(private service:ActividadService,private router:Router) {}

  ngOnInit() {
    const id = localStorage.getItem('id');
    if(id === '0'){
      this.service.getActividades().subscribe(data => {
        this.actividades = data;
      });
    }else{
      this.listarId(id);
      localStorage.setItem('id', '0');
    }

  }

  RegistrarActividad(){
    this.router.navigate(['registrarActividad']);
  }

  listarId(id:string){

    this.service.getActividadId(+id)
      .subscribe(data =>{
        this.actividades = data;
      })
  }

}
