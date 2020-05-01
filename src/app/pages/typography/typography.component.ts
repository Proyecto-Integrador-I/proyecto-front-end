import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "app-typography",
  templateUrl: "typography.component.html"
})
export class TypographyComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}

  Registrar(){
    this.router.navigate(['registrarActividad']);
  }

}
