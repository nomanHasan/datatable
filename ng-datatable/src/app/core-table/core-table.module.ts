import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreTableRoutingModule } from './core-table-routing.module';
import { CoreTableComponent } from './core-table.component';

@NgModule({
  imports: [
    CommonModule,
    CoreTableRoutingModule
  ],
  declarations: [CoreTableComponent]
})
export class CoreTableModule { }
