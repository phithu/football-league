import {
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { FixturesApiService } from '../../../../../../shared/service/fixtures-api';
import { ListMatchFormComponent } from '../../components/list-match-form';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})
export class CreateResultComponent implements OnInit {


  @ViewChildren(ListMatchFormComponent) formMatch: QueryList<ListMatchFormComponent>;
  public form: FormGroup;
  public controlConfig = {
    home: new FormControl('', [Validators.required]),
    homeImages: new FormControl(''),
    away: new FormControl('', [Validators.required]),
    awayImages: new FormControl('', [Validators.required]),
    stadium: new FormControl('', [Validators.required]),
    dateTime: new FormControl('', [Validators.required]),
    soccer: new FormControl('', [Validators.required]),
  };
  public validatorMessages = {
    home: {
      required: 'Vui lòng nhập đội chủ nhà'
    },
    away: {
      required: 'Vui lòng nhập đội khách'
    },
    stadium: {
      required: 'Vui lòng nhập sân vận động'
    },
    dateTime: {
      required: 'Vui lòng nhập ngày thi đấu'
    },
    soccer: {
      required: 'Vui lòng nhập tỉ số trận đấu'
    }
  };
  public formErrors = {
    home: '',
    away: '',
    stadium: '',
    dateTime: '',
    soccer: ''
  };

  public listFixtures: Array<any>;
  public listMatch: Array<any>;
  public selectedOption;
  public isCallAPI: boolean;

  constructor(private formBuilder: FormBuilder,
              private fixturesApiService: FixturesApiService) {

  }

  public ngOnInit() {
    this.createForm();
    this.getAllFixtures();
  }

  public createForm() {
    this.form = this.formBuilder.group({
      week: new FormControl('', [Validators.required]),
      listFormMatch: this.formBuilder.array(this.generateFormMatch(4))
    });
  }

  public getAllFixtures() {
    this.fixturesApiService.getAllFixtures()
      .subscribe((response) => {
        const {result, data} = response;
        if (result && data) {
          this.listFixtures = data;
          const lengthFixtures = this.listFixtures.length;
          this.selectedOption = (lengthFixtures).toString();
          this.form.patchValue({week: this.selectedOption});
          this.listMatch = this.listFixtures[lengthFixtures - 1].match;
          this.isCallAPI = true;
        }
      });
  }

  public onSelectWeek(value) {
    const index = parseInt(value) - 1;
    this.listMatch = this.listFixtures[index].match;
    this.form.patchValue({week: value});
  }

  public initFormMatch() {
    return this.formBuilder.group({
      home: ['', Validators.required],
      homeImages: ['', Validators.required],
      away: ['', Validators.required],
      awayImages: ['', Validators.required],
      stadium: ['', Validators.required],
      dateTime: ['', Validators.required],
      soccer: ['', Validators.required],
    });
  }

  public generateFormMatch(number) {
    const arrayForm = [];
    for (let i = 1; i <= number; i++) {
      arrayForm.push(this.initFormMatch());
    }
    return arrayForm;
  }

  public submitCreateResult(form) {
    const {valid, value} = form;
    if (valid) {
      console.log('value', value);
    } else {
      this.formMatch.forEach(component => {
        component.validatorForm(true);
      });
    }
  }
}
