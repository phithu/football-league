import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ImagesUploadService } from './images-upload.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss']
})
export class ImagesUploadComponent implements OnInit {

  public TYPE_UPLOAD = {
    'AVATAR_UPLOAD': true,
    'LOGO_UPLOAD': false
  };

  @ViewChild('images') images: ElementRef;
  @Output('onUpload') onUpload = new EventEmitter<any>();
  @Output('onDelete') onDelete = new EventEmitter<string>();
  @Input('titleUpload') titleUpload: string = 'Tải ảnh';
  @Input('typeUpload') typeUpload: boolean = this.TYPE_UPLOAD.AVATAR_UPLOAD;
  @Input('size') size = {
    width: 120,
    height: 120
  };

  public idImages: string;

  public uploader: FileUploader = new FileUploader(this.imagesUploadService.fileUpload);

  constructor(private imagesUploadService: ImagesUploadService) {
  }

  public ngOnInit() {

    this.imagesUploadService.initiationUpload(this.uploader);
    this.imagesUploadService.completeUpload(this.uploader, (response: any) => {
      if (response.success) {
        const {id, link} = response.data;
        this.idImages = id;
        this.onUpload.emit(link);
      }
    });
  }

  public onSelectImages(event) {
    if (this.uploader.queue.length > 1) {
      this.imagesUploadService.deleteImages(this.idImages)
        .subscribe();
      this.uploader.queue.splice(0, 1);
    }
    event.srcElement.value = '';
    this.onUpload.emit(null);
    this.imagesUploadService.upload(this.uploader);
  }

  public deleteImages() {
    this.uploader.clearQueue();
    this.onDelete.emit();
    this.imagesUploadService.deleteImages(this.idImages)
      .subscribe();
  }

}
