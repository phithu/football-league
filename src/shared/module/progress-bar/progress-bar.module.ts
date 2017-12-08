import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProgressModule } from '@ngx-progressbar/core';
import { ProgressBarService } from './progress-bar.service';

@NgModule({
  imports: [
    CommonModule,
    NgProgressModule.forRoot()
  ],
  exports: [
    NgProgressModule
  ],
  providers: [
    ProgressBarService
  ]
})
export class ProgressBarModule {
}
