import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultadoListComponent } from './resultado-list/resultado-list.component';

const routes: Routes = [
  { path: 'app', component: AppComponent},
  { path: 'resultado-list', component: ResultadoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//export const routingComponents = [AppComponent]
