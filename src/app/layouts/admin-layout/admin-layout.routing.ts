import { Routes } from "@angular/router";

import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { UserComponent } from '../../pages/user/user.component';
import { EditarActividadComponent } from '../../pages/editar-actividad/editar-actividad.component';

export const AdminLayoutRoutes: Routes = [
  { path: "cursos", component: TablesComponent },
  { path: "actividades", component: TypographyComponent },
  { path: "registrarActividad", component: UserComponent },
  { path: "editarActividad", component: EditarActividadComponent }
];
