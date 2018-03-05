import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreTableRoutingModule } from './core-table-routing.module';
import { CoreTableComponent } from './core-table.component';
import { DatatableModule } from '../datatable/datatable.module';

@NgModule({
  imports: [
    CommonModule,
    CoreTableRoutingModule,
    DatatableModule
  ],
  declarations: [CoreTableComponent]
})
export class CoreTableModule { }
