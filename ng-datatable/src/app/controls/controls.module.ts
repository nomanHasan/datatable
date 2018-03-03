import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowcolumnComponent } from './rowcolumn/rowcolumn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RowcolumnComponent],
  exports: [
    RowcolumnComponent
  ]
})
export class ControlsModule { }
