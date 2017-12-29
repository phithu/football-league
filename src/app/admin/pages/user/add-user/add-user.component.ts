import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { FormBaseComponent } from '../../../../../shared/module/form-base';
import { Matcher } from '../../../../extension/matcher.validator';
import { ImagesUploadComponent } from '../../../../../shared/module/images-upload';
import { NotificationComponent } from '../../../../../shared/module/notification';
import { TitleAppService } from '../../../../../shared/module/title-app';
import { AccountService } from '../../../../../shared/service/account';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent extends FormBaseComponent implements OnInit {

  public form: FormGroup;
  public uploaded = true;
  public controlConfig = {
    userName: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Matcher('password'), Validators.required]),
    typeUser: new FormControl('', [Validators.required]),
    imagesURL: new FormControl(''),
  };
  public validatorMessages = {
    userName: {
      required: 'Vui lòng tên đăng nhập'
    },
    fullName: {
      required: 'Vui lòng tên người dùng'
    },
    password: {
      required: 'Vui lòng nhập mật khẩu'
    },
    confirmPassword: {
      required: 'Vui lòng nhập xác nhận mật khẩu',
      Matcher: 'Mật khẩu không trùng khớp với nhau',
    },
    typeUser: {
      required: 'Vui lòng lựa chọn loại người dùng'
    }
  };
  public formErrors = {
    userName: '',
    password: '',
    fullName: '',
    confirmPassword: '',
    typeUser: ''
  };

  public configForm = {
    updateOn: 'change'
  };

  @ViewChild('imagesUpload') imagesUpload: ImagesUploadComponent;
  @ViewChild('notification') notification: NotificationComponent;


  constructor(private accountService: AccountService,
              private titleAppService: TitleAppService) {
    super();
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


  public ngOnInit() {
    super.ngOnInit();
    this.form.valueChanges.subscribe(() => this.validatorForm());
    this.titleAppService.setTitle('Thêm mới người dùng');
  }

  public register(value) {
    this.validatorForm(true);
    const {fullName, userName, password, typeUser} = value;
    if (this.form.valid) {
      this.uploaded = false; // disabled button register
      if (this.imagesURL.length === 0) {
        this.imagesURL = this.fullName.charAt(0).toUpperCase();
      }
      this.accountService.register({
        fullName,
        userName,
        password,
        typeUser,
        imagesURL: this.imagesURL,
      }).subscribe((response) => {
        if (response.result) {
          if (response.mgs === 'User have been existed') {
            this.notification.onError('Tên người dùng đã tồn tại. Vui lòng lựa chọn tên khác', 'Lỗi');
          } else {
            this.notification.onSuccess('Người dùng đã được tạo thành công', 'Thành công');
          }
          this.uploaded = true;
        }
      });
    }
  }

  public getImagesUpload(imagesURL) {
    if (imagesURL) {
      this.uploaded = true;
      this.form.patchValue({imagesURL});
    } else {
      this.uploaded = false;
    }
  }

  public deleteImages() {
    // reset value when click delete images
    this.imagesURL = '';
  }

  public resetForm() {
    this.form.reset();
    this.imagesUpload.deleteImages();
  }
}
