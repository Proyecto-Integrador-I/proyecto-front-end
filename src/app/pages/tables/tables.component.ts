import { Component, OnInit } from "@angular/core";
import {Curso} from "../../model/Curso";
import {CursoService} from "../../services/curso.service";
import {Router} from "@angular/router";
import {Actividad} from "../../model/Actividad";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  cursos: Curso[];
  constructor(private service: CursoService, private router: Router) { }

  ngOnInit() {
    this.service.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  listarActividad(curso:Curso):void{
    // enviamos el id de la fila seleccionada
    localStorage.setItem('id', curso.codigo.toString());
    this.router.navigate(['actividades']);
  }
}
