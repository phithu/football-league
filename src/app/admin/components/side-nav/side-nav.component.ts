import {
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from '@shared/service/auth';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {

  public dataUser: any;

  public TYPE_USER = {
    OWNER: 'owner',
    ADMIN: 'admin'
  };

  constructor(private authService: AuthService) {
  }

  public ngOnInit() {
    this.dataUser = this.authService.getDataLogin();
  }

}
