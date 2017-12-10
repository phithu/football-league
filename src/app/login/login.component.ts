import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

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
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  };
  public validatorMessages = {
    userName: {
      required: 'Vui lòng tên đăng nhập'
    },
    password: {
      required: 'Vui lòng nhập mật khẩu'
    }
  };
  public formErrors = {
    userName: '',
    password: ''
  };

  public configForm = {
    updateOn: 'submit'
  };

  constructor(private authService: AuthService,
              private router: Router) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  public login(value) {
    if (this.form.valid) {
      this.authService.login(value.userName, value.password)
        .subscribe((response) => {
          if (response.result) {
            if (response.mgs === MGS_RESPONSE.PASSWORD_INCORRECT) {
              this.resMessages = 'Mật khẩu không đúng. Vui lòng thử lại';
            } else if (response.mgs === MGS_RESPONSE.USER_NOT_FOUND) {
              this.resMessages = 'Tên tài khoản không tồn tại. Vui lòng kiểm tra lại';
            } else {
              if (response.token && response.user) {
                const {userID, fullName, userName, imagesURL, typeUser} = response.user;
                const {token} = response;
                this.authService.loginSuccess(userID, fullName, userName, imagesURL, typeUser, token);
                this.router.navigate(['/']);
              } else {
                this.resMessages = 'Hiện tại không thể đăng nhập. Vui lòng thử lại sau';
              }
            }
          }
        });
    } else {
      this.validatorForm(true);
    }
  }
}
