import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlainTableRoutingModule } from './plain-table-routing.module';
import { PlainTableComponent } from './plain-table.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared-module/shared-module.module';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule,
    PlainTableRoutingModule
  ],
  declarations: [PlainTableComponent]
})
export class PlainTableModule { }
