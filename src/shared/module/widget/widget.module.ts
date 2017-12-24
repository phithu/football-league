import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetComponent } from './widget.component';
import { FrontWidgetComponent } from './front-widget/front-widget.component';
import { BackWidgetComponent } from './back-widget/back-widget.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    WidgetComponent,
    FrontWidgetComponent,
    BackWidgetComponent,
  ],
  declarations: [
    WidgetComponent,
    FrontWidgetComponent,
    BackWidgetComponent,
  ],

})
export class WidgetModule {
}
