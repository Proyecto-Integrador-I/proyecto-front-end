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
    this.service.getActividades().subscribe(data => {
      this.actividades = data;
    });
  }

  Registrar(){
    this.router.navigate(['registrarActividad']);
  }

}
