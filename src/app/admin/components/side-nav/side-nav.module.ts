import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { SideNavComponent } from './side-nav.component';
import { RouterModule } from '@angular/router';


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
