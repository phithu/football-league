import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import * as moment from 'moment';

import { AddInfoPlayerComponent } from '../add-info-player';

const TYPE_PLAYER = {
  FOREIGN: 'foreign',
  NATIVE: 'native',
};

@Component({
  selector: 'app-add-info-list-player',
  templateUrl: './add-info-list-player.component.html',
  styleUrls: ['./add-info-list-player.component.scss'],
  exportAs: 'addInfoListPlayer'
})

export class AddInfoListPlayerComponent implements OnChanges, OnInit {

  @Output('nextStep') public nextStep = new EventEmitter();
  @Input('rule') public rule: any;
  @ViewChildren(AddInfoPlayerComponent) addInfoPlayer: QueryList<AddInfoPlayerComponent>;

  public form: FormGroup;
  public lengthPlayerForm: Number;
  public numberForeignTeam = 0;
  public listCheck = [];
  public minDate;
  public maxDate;
  constructor(private formBuilder: FormBuilder) {

  }

  public ngOnChanges(simpleChanges: SimpleChanges) {
    const {currentValue} = simpleChanges.rule;
    if (currentValue) {
      const {minOld, maxOld, minPlayerTeam, maxPlayerTeam, maxForeignTeam} = currentValue;
      this.updateNumberForm(minPlayerTeam);
      this.minDate = moment().startOf('year').subtract(minOld, 'year').toDate();
      this.maxDate = moment().startOf('year').subtract(maxOld, 'year').toDate();
    }
  }

  public ngOnInit() {
    this.createForm(3);
  }

  public updateNumberForm(minPlayerTeam) {
    if (minPlayerTeam > 11) {
      for (let i = 1; i <= (minPlayerTeam - 11); i++) {
        this.addPlayerForm();
      }
    }
  }

  public generatePlayerForm(number) {
    const arrayPlayerForm = [];
    for (let i = 1; i <= number; i++) {
      arrayPlayerForm.push(this.initPlayer());
    }
    return arrayPlayerForm;
  }

  public createForm(number) {
    this.form = this.formBuilder.group({
      player: this.formBuilder.array(this.generatePlayerForm(number))
    });
  }

  public initPlayer() {
    // initialize our address
    return this.formBuilder.group({
      namePlayer: ['', Validators.required],
      birthDate: ['', Validators.required],
      typePlayer: ['', Validators.required],
      notes: [''],
      imagesURL: ['']
    });
  }

  public addPlayerForm() {
    // add player to the list
    const control = <FormArray>this.form.controls['player'];

    this.lengthPlayerForm = control.length + 1;
    control.push(this.initPlayer());
  }

  public removePlayerForm(i: number) {
    // remove player from the list
    const control = <FormArray>this.form.controls['player'];
    this.lengthPlayerForm = control.length - 1;
    control.removeAt(i);
  }

  public onNext() {
    const {valid, value} = this.form;
    if (valid) {
      this.nextStep.emit(value);
    } else {
      this.addInfoPlayer.forEach(playerComponent => {
        playerComponent.validatorForm(true);
      });
    }
  }

  public onRadioChange(typePlayer, indexRadio) {
    if (typePlayer === TYPE_PLAYER.FOREIGN) {
      this.numberForeignTeam += 1;
      if (this.numberForeignTeam <= this.rule.maxForeignTeam) {
        this.listCheck.push(indexRadio);
      }
    } else {
      const index = this.listCheck.indexOf(indexRadio);
      if (index >= 0) {
        this.numberForeignTeam -= 1;
        this.listCheck.splice(index, 1);
      }
    }
  }
}



