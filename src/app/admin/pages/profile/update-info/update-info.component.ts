import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ImagesUploadComponent } from '../../../../../shared/module/images-upload';
import { NotificationComponent } from '../../../../../shared/module/notification';
import { FormBaseComponent } from '../../../../../shared/module/form-base';
import { AccountService } from '../../../../../shared/service/account';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent extends FormBaseComponent implements OnInit {

  @Input('dataUser') dataUser: any;
  public form: FormGroup;
  public uploaded = true;
  public isUploaded: boolean = false;
  public controlConfig = {
    fullName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    imagesURL: new FormControl('')
  };
  public validatorMessages = {
    userName: {
      required: 'Vui lòng tên đăng nhập'
    },
    fullName: {
      required: 'Vui lòng tên người dùng'
    },
  };
  public formErrors = {
    userName: '',
    fullName: ''
  };

  public configForm = {
    updateOn: 'change'
  };

  @ViewChild('imagesUpload') imagesUpload: ImagesUploadComponent;
  @ViewChild('notification') notification: NotificationComponent;

  constructor(private accountService: AccountService) {
    super();
  }

  public ngOnInit() {
    super.ngOnInit();
    this.form.patchValue(this.dataUser);
  }

  public get fullName() {
    return this.form.get('fullName').value;
  }

  public set fullName(value) {
    this.form.get('fullName').setValue(value);
  }

  public get imagesURL() {
    return this.form.get('imagesURL').value;
  }

  public set imagesURL(value) {
    this.form.get('imagesURL').setValue(value);
  }

  public updateInfo(value: any) {
    this.validatorForm(true);
    const {fullName, userName} = value;
    if (this.form.valid) {
      if (this.imagesURL.length === 0) {
        this.imagesURL = this.fullName.charAt(0).toUpperCase();
      }
      this.accountService.updateUserByID(
        this.dataUser['_id'],
        fullName,
        userName,
        this.imagesURL
      ).subscribe((response) => {
        if (response.result && response.mgs === 'user have been update') {
          this.notification.onSuccess('Thông tin đã được cập nhập', 'Thành công');
        }
      });
    }
  }

  public getImagesUpload(imagesURL) {
    this.isUploaded = true;
    if (imagesURL) {
      this.uploaded = true;
      this.form.patchValue({imagesURL});
    } else {
      this.uploaded = false;
    }
  }

  public deleteImages() {
    this.imagesURL = '';
  }


}
