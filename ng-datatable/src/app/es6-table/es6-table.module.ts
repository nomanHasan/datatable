import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es6TableRoutingModule } from './es6-table-routing.module';
import { Es6TableComponent } from './es6-table.component';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  imports: [
    CommonModule,
    Es6TableRoutingModule,
    ControlsModule
  ],
  declarations: [Es6TableComponent]
})
export class Es6TableModule { }
