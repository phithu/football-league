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

import { ImagesUploadComponent } from '@shared/module/images-upload';
import { NotificationComponent } from '@shared/module/notification';
import { FormBaseComponent } from '@shared/module/form-base';
import { AccountService } from '@shared/service/account';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent extends FormBaseComponent implements OnInit {

  @Input('dataUser') dataUser: any;
  public form: FormGroup;
  public disabledButton = false; // Check whether or not disabled button submit
  public isUploadNewAvatar = false; // Check whether or not upload new avatar
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

  public submitFormUpdate(form) {
    const {valid, value} = form;
    if (valid) {
      this.disabledButton = true;
      const {fullName, userName} = value;

      if (this.imagesURL.length === 0) {
        this.imagesURL = this.fullName.charAt(0).toUpperCase();
      }
      if (localStorage.getItem('userName') === userName) {
        this.updateProfileUser(fullName, userName);
      } else {
        this.checkUserExist(fullName, userName);
      }
    } else {
      this.validatorForm(true);
    }
  }

  public checkUserExist(fullName, userName) {
    this.accountService.checkUserExist(userName)
      .subscribe((response) => {
        if (response.result) {
          if (response.mgs === 'User have been existed') {
            this.disabledButton = false;
            this.notification.onError('Tên người dùng đã tồn tại',
              'Lỗi cập nhật');
          } else {
            this.updateProfileUser(fullName, userName);
          }
        }
      });
  }

  public updateProfileUser(fullName, userName) {
    this.accountService.updateUserByID(
      this.dataUser['_id'],
      fullName,
      userName,
      this.imagesURL
    ).subscribe((response) => {
      this.disabledButton = false;
      if (response.result && response.mgs === 'user have been update') {
        this.notification.onSuccess('Thông tin đã được cập nhập',
          'Thành công');
      }
    });
  }

  public getImagesUpload(imagesURL) {
    this.isUploadNewAvatar = true;
    if (imagesURL) {
      this.disabledButton = false;
      this.form.patchValue({imagesURL});
    } else {
      this.disabledButton = true;
    }
  }

  public deleteImages() {
    this.imagesURL = '';
  }


}
