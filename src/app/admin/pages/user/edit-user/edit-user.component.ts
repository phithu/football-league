import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { UserService } from '../../../../../shared/service/user';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public listUser: Array<any>;

  constructor(private userService: UserService) {
  }

  public ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((response) => {
        if (response.result) {
          this.listUser = response.data;
          console.log(this.listUser);
        }
      });
  }


}
