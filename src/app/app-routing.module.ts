import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { POC1Component } from './poc1/poc1.component';
import { POC2Component } from './poc2/poc2.component';
import { POC3Component } from './poc3/poc3.component';

const routes: Routes = [
  {path: 'poc1', component: POC1Component},
  {path: 'poc2', component: POC2Component},
  {path: 'poc3', component: POC3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
