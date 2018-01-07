import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatExpansionModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav.component';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule {
}
