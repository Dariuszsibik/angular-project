import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared-module/shared-module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  exports: [SidebarComponent, PageNotFoundComponent],
  declarations: [SidebarComponent, PageNotFoundComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
  ]
})
export class CoreModule { }
