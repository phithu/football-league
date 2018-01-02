import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { FormBaseComponent } from '../../../../../../shared/module/form-base';

@Component({
  selector: 'app-add-info-team',
  templateUrl: './add-info-team.component.html',
  styleUrls: ['./add-info-team.component.scss'],
  exportAs: 'addInfoTeam'
})
export class AddInfoTeamComponent extends FormBaseComponent implements OnInit {

  @Output('nextStep') public nextStep = new EventEmitter();

  public uploaded = true;
  public form: FormGroup;
  public controlConfig = {
    nameTeam: new FormControl('', [Validators.required]),
    stadium: new FormControl('', [Validators.required]),
    imagesURL: new FormControl('', [Validators.required]),
  };
  public validatorMessages = {
    nameTeam: {
      required: 'Vui lòng nhập tên đội bóng'
    },
    stadium: {
      required: 'Vui lòng nhập sân vận động'
    },
    imagesURL: {
      required: 'Vui lòng lựa chọn logo đội bóng'
    },
  };
  public formErrors = {
    nameTeam: '',
    stadium: '',
    imagesURL: ''
  };

  public configForm = {
    updateOn: 'change'
  };

  public get imagesURL() {
    return this.form.get('imagesURL').value;
  }

  public set imagesURL(value) {
    this.form.get('imagesURL').setValue(value);
  }

  constructor() {
    super();
  }

  public ngOnInit() {
    super.ngOnInit();
    this.form.valueChanges.subscribe(() => this.validatorForm());
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

  public onNext() {
    const {value, valid} = this.form;
    if (valid) {
      this.nextStep.emit(value);
    } else {
      this.validatorForm(true);
    }
  }

}
