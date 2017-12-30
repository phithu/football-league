import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { LoadingAppComponent } from './loading-app.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoadingAppComponent
  ],
  exports: [
    LoadingAppComponent
  ]
})
export class LoadingAppModule {
}
