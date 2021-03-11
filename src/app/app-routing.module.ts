import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
   { path: 'topbar', component: TopbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
