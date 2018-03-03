import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlainTableComponent } from './plain-table.component';

const routes: Routes = [
  {
    path: '',
    component: PlainTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlainTableRoutingModule { }
