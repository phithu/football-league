import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { AddInfoPlayerComponent } from '../add-info-player';


@Component({
  selector: 'app-add-info-list-player',
  templateUrl: './add-info-list-player.component.html',
  styleUrls: ['./add-info-list-player.component.scss'],
  exportAs: 'addInfoListPlayer'
})
export class AddInfoListPlayerComponent implements OnInit {

  @Output('nextStep') public nextStep = new EventEmitter();
  @ViewChildren(AddInfoPlayerComponent) addInfoPlayer: QueryList<AddInfoPlayerComponent>;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  public ngOnInit() {
    this.createForm();
  }

  public generatePlayerForm(number) {
    const arrayPlayerForm = [];
    for (let i = 1; i <= number; i++) {
      arrayPlayerForm.push(this.initPlayer());
    }
    return arrayPlayerForm;
  }

  public createForm() {
    this.form = this.formBuilder.group({
      player: this.formBuilder.array(this.generatePlayerForm(15))
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
    control.push(this.initPlayer());
  }

  public removePlayerForm(i: number) {
    // remove player from the list
    const control = <FormArray>this.form.controls['player'];
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
}



