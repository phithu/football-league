import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
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
import { TableApiService } from '../../../../../../shared/service/table-api';
import { ResultApiService } from '../../../../../../shared/service/result-api';
import { NotificationComponent } from '../../../../../../shared/module/notification';
import { TitleAppService } from "../../../../../../shared/module/title-app/title-app.service";

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})
export class CreateResultComponent implements OnInit {

  @ViewChild('notification') notification: NotificationComponent;
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
  public listResult: Array<any>;
  public listMatch: Array<any>;
  public selectedOption;
  public isCallAPI: boolean;
  public disabledSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private titleAppService: TitleAppService,
              private fixturesApiService: FixturesApiService,
              private tableApiService: TableApiService,
              private resultApiService: ResultApiService) {

  }

  public ngOnInit() {
    this.titleAppService.setTitle('Ghi nhận kết quả trận đấu');
    this.createForm();
    this.getResult();
  }

  public createForm() {
    this.form = this.formBuilder.group({
      week: new FormControl('', [Validators.required]),
      listFormMatch: this.formBuilder.array(this.generateFormMatch(4))
    });
  }

  public getResult() {
    this.resultApiService.getResult()
      .subscribe((response) => {
        const {result, data} = response;
        if (result) {
          this.listResult = data;
          this.getAllFixtures();
        }
      })
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
      this.disabledSubmitted = true;
      const {week, listFormMatch} = value;
      this.resultApiService.insertResult(week, listFormMatch)
        .subscribe((response) => this.callbackInsert(response));
      if (week === '1') {
        this.tableApiService.insertTable(week, listFormMatch).subscribe();
      } else {
        this.tableApiService.updateTable(week, listFormMatch).subscribe();
      }
    } else {
      this.formMatch.forEach(component => {
        component.validatorForm(true);
      });
    }
  }

  private callbackInsert(response) {
    if (response.result) {
      this.disabledSubmitted = false;
      this.notification
        .onSuccess('Kết quả trận đấu đã được ghi', 'Thành công');
    }
  }
}
