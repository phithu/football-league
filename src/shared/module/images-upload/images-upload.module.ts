import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FileUploadModule } from 'ng2-file-upload';

import { ImagesUploadService } from './images-upload.service';
import { ImagesUploadComponent } from './images-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ],
  declarations: [ImagesUploadComponent],
  providers: [
    ImagesUploadService
  ],
  exports: [
    ImagesUploadComponent
  ]
})
export class ImagesUploadModule {
}
