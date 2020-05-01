import { Routes } from "@angular/router";

import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
  { path: "cursos", component: TablesComponent },
  { path: "actividades", component: TypographyComponent }
];
