import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResultApiService } from './result-service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ResultApiService
  ]
})
export class ResultApiModule {
}
