import { Component, OnInit } from "@angular/core";
import {Curso} from "../../model/Curso";
import {CursoService} from "../../services/curso.service";
import {Router} from "@angular/router";

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
}
