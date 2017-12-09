import { Observable } from 'rxjs/Observable';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const TOKEN = '83d5b88f58402a9992afc51ab29671dc7f70125c';
const URL = 'https://api.imgur.com/3/image';

@Injectable()
export class ImagesUploadService {

  constructor(private http: HttpClient) {
  }

  public fileUpload = {
    itemAlias: 'image',
    url: URL,
    headers: [
      {
        'name': 'Authorization',
        'value': `Bearer ${TOKEN}`
      }
    ]
  };

  public initiationUpload(uploader: FileUploader) {
    uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

  }

  public completeUpload(uploader: FileUploader, action: (response: any) => void) {
    uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      const objResponse = JSON.parse(response);
      action(objResponse);
    };
  }

  public upload(uploader: FileUploader) {
    uploader.queue.forEach((itemFile: any) => {
      itemFile.upload();
      let imagesLink = itemFile.some;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        imagesLink = e.target.result;
        itemFile.images = imagesLink;
      };
      reader.readAsDataURL(imagesLink);

    });
  }

  public deleteImages(imagesHash: string): Observable<any> {
    const headers = new HttpHeaders().append('Authorization', `Bearer ${TOKEN}`);

    return this.http.delete(`${URL}/${imagesHash}`, {
      headers: headers
    });
  }


}
