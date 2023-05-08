import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpetpageComponent } from './addpetpage/addpetpage.component';
const routes: Routes = [
  {path: 'addpetpage', component: AddpetpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
