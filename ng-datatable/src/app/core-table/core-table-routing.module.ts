import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CoreTableComponent } from './core-table.component';

const routes: Routes = [
  {
    path: '',
    component: CoreTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreTableRoutingModule {}