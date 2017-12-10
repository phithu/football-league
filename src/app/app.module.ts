import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.router';
import { JWTInterceptors } from './extension/jwtinterceptors';
import { AuthModule } from '../shared/service/auth';
import { ProgressBarModule } from '../shared/module/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ProgressBarModule,
    AuthModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptors,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
