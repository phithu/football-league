import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { TitleAppService } from './title-app.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    TitleAppService,
    Title
  ]
})
export class TitleAppModule {
}
