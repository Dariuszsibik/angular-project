import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared-module/shared-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class CoreModule { }
