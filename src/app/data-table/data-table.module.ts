import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    MatCardModule,
    MatTableModule,
  ],
})
export class DataTableModule {}
