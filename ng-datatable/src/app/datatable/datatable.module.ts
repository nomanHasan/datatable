import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { HeaderComponent } from './header/header.component';
import { HeaderRowComponent } from './header-row/header-row.component';
import { HeaderCellComponent } from './header-cell/header-cell.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { RowComponent } from './table-body-row/table-body-row.component';
import { CellComponent } from './table-body-cell/table-body-cell.component';
import { FooterComponent } from './footer/footer.component';
import { FooterRowComponent } from './footer-row/footer-row.component';
import { FooterCellComponent } from './footer-cell/footer-cell.component';
import { SearchComponent } from './search/search.component';
import { SearchRowComponent } from './search-row/search-row.component';
import { SearchCellComponent } from './search-cell/search-cell.component';
import { TableStore } from './store/table.store';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
