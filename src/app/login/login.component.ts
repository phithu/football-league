import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { FormBaseComponent } from '../../shared/module/form-base';
import { AuthService } from '../../shared/service/auth';

const MGS_RESPONSE = {
  PASSWORD_INCORRECT: 'Password incorrect',
  USER_NOT_FOUND: 'User not found'
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent implements OnInit {

  public resMessages: any;
  public form: FormGroup;
  public controlConfig = {
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  };
  public validatorMessages = {
    username: {
      required: 'Vui lòng tên đăng nhập'
    },
    password: {
      required: 'Vui lòng nhập mật khẩu'
    }
  };
  public formErrors = {
    username: '',
    password: ''
  };

  public configForm = {
    updateOn: 'submit'
  };

  constructor(private authService: AuthService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  public login(value) {
    if (this.form.valid) {
      this.authService.login(value.username, value.password)
        .subscribe((response) => {
          if (response.result) {
            // resMessages
            if (response.mgs === MGS_RESPONSE.PASSWORD_INCORRECT) {
              this.resMessages = 'Mật khẩu không đúng. Vui lòng thử lại';
            } else if (response.mgs === MGS_RESPONSE.USER_NOT_FOUND) {
              this.resMessages = 'Tên tài khoản không tồn tại. Vui lòng kiểm tra lại';
            } else {
              this.resMessages = 'Hiện tại không thể đăng nhập. Vui lòng thử lại sau';
            }
          }
        });
    } else {
      this.validatorForm(true);
    }
  }
}
