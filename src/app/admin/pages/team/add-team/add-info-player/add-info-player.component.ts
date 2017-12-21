import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-info-player',
  templateUrl: './add-info-player.component.html',
  styleUrls: ['./add-info-player.component.scss']
})
export class AddInfoPlayerComponent implements OnInit {

  @Input('group') public playerForm: FormGroup;

  public validatorMessages = {
    namePlayer: {
      required: 'Vui lòng tên cầu thủ'
    },
    typePlayer: {
      required: 'Vui lòng lựa chọn loại cầu thủ'
    },
    birthDate: {
      required: 'Vui lòng nhập ngày sinh cầu thủ'
    }
  };
  public formErrors = {
    namePlayer: '',
    typePlayer: '',
    birthDate: ''
  };

  public TYPE_PLAYER = {
    FOREIGN: 'foreign',
    NATIVE: 'native',
  };

  public get imagesURL() {
    return this.playerForm.get('imagesURL').value;
  }

  public set imagesURL(value) {
    this.playerForm.get('imagesURL').setValue(value);
  }

  constructor() {
  }

  public ngOnInit() {
    this.playerForm.valueChanges
      .subscribe(() => this.validatorForm());
  }

  public getImagesUpload(imagesURL) {
    if (imagesURL) {
      this.playerForm.patchValue({imagesURL});
    }
  }

  public deleteImages() {
    // reset value when click delete images
    this.imagesURL = '';
  }

  public validatorForm(submitted?: boolean) {
    if (!this.playerForm) {
      return;
    }
    const form = this.playerForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (submitted) {
          control.markAsDirty();
        }
        // self.hasError = false;
        if (control && control.dirty && !control.valid) {
          const messages = this.validatorMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
              break;
            }
          }
        }
      }
    }
  }
}
