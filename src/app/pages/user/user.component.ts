import { Component, OnInit } from "@angular/core";
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {ActividadService} from "../../services/actividad.service";
import {Actividad} from '../../model/Actividad';


@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  actividad: Actividad = new Actividad();

  constructor(private router:Router, private service:ActividadService) {}

  public isError = false;

  ngOnInit() {}

  onRegistrar(form: NgForm): void{
    console.log(form);
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
    const idCurso = localStorage.getItem('idCurso');
      this.router.navigate(['actividades']);

  }

}
