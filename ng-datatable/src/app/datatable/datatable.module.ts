import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { HeaderComponent } from './header/header.component';
import { HeaderRowComponent } from './header-row/header-row.component';
import { HeaderCellComponent } from './header-cell/header-cell.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { FooterComponent } from './footer/footer.component';
import { FooterRowComponent } from './footer-row/footer-row.component';
import { FooterCellComponent } from './footer-cell/footer-cell.component';
import { SearchComponent } from './search/search.component';
import { SearchRowComponent } from './search-row/search-row.component';
import { SearchCellComponent } from './search-cell/search-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatatableComponent,
    HeaderComponent,
    HeaderRowComponent,
    HeaderCellComponent,
    TableBodyComponent,
    RowComponent,
    CellComponent,
    FooterComponent,
    FooterRowComponent,
    FooterCellComponent,
    SearchComponent,
    SearchRowComponent,
    SearchCellComponent
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
