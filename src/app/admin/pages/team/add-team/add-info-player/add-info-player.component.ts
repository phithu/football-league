import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-info-player',
  templateUrl: './add-info-player.component.html',
  styleUrls: ['./add-info-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddInfoPlayerComponent implements DoCheck, OnChanges, OnInit {

  @Input('group') public playerForm: FormGroup;
  @Input('indexRadio') indexRadio: Number;
  @Input('minDate') minDate: any;
  @Input('maxDate') maxDate: any;
  @Input('list') list: any;
  @Input('maxForeignTeam') maxForeignTeam: Number;
  @Output('onRadioChange') onRadioChange = new EventEmitter();

  public validatorMessages = {
    namePlayer: {
      required: 'Vui lòng tên cầu thủ'
    },
    typePlayer: {
      required: 'Vui lòng lựa chọn loại cầu thủ'
    },
    birthDate: {
      required: 'Vui lòng nhập ngày sinh cầu thủ',
      Old: 'Tuổi cầu thủ...'
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

  public radioCheck = false;

  public get imagesURL() {
    return this.playerForm.get('imagesURL').value;
  }

  public set imagesURL(value) {
    this.playerForm.get('imagesURL').setValue(value);
  }

  public set typePlayer(value) {
    this.playerForm.get('typePlayer').setValue(value);
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }


  public ngDoCheck() {
    this.changeDetectorRef.markForCheck();
    if (this.list.length === this.maxForeignTeam) {
      this.radioCheck = this.list.indexOf(this.indexRadio) < 0;
      if (this.radioCheck) {
        // SET VALUE FOR TYPE PLAYER IS NATIVE
        this.typePlayer = this.TYPE_PLAYER.NATIVE;
      }
    }
    if (this.list.length < this.maxForeignTeam) {
      this.radioCheck = false;
    }
  }

  public ngOnChanges(simplesChange: SimpleChanges) {
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

  public onChange(value) {
    this.onRadioChange.emit(value);
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
