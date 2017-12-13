import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TitleAppService } from '../../../../shared/module/title-app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public dataUser: any;

  constructor(private activatedRoute: ActivatedRoute,
              private titleAppService: TitleAppService) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Thông tin người dùng');
    this.activatedRoute.data
      .map(value => value.data)
      .subscribe((response) => {
        if (response.result) {
          this.dataUser = response.data;
        }
      });
  }



}
