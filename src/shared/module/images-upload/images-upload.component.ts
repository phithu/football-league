import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ImagesUploadService } from './images-upload.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss']
})
export class ImagesUploadComponent implements OnInit {

  @Output('onUpload') onUpload = new EventEmitter<string>();
  @Output('onDelete') onDelete = new EventEmitter<string>();
  @Input('titleUpload') titleUpload: string = 'Tải ảnh';

  public uploader: FileUploader = new FileUploader(this.imagesUploadService.fileUpload);
  public deletehash: string;

  constructor(private imagesUploadService: ImagesUploadService) {
  }

  public ngOnInit() {

    this.imagesUploadService.initiationUpload(this.uploader);
    this.imagesUploadService.completeUpload(this.uploader, (response: any) => {
      if (response.success) {
        this.deletehash = response.data.deletehash;
        const linkImages = response.data.link;
        this.onUpload.emit(linkImages);
      }
    });
  }

  public onSelectImages(event) {
    event.srcElement.value = '';
    this.onUpload.emit(null);
    this.imagesUploadService.upload(this.uploader);
  }

  public deleteImages() {
    this.uploader.clearQueue();
    this.onDelete.emit();
    this.imagesUploadService.deleteImages(this.deletehash).subscribe();
  }

}
