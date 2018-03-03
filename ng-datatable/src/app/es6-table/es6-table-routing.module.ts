import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Es6TableComponent } from './es6-table.component';

const routes: Routes = [
  {
    path: '',
    component: Es6TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es6TableRoutingModule { }
