import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationService } from './communication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CommunicationService]
})
export class CommunicationModule {
}
