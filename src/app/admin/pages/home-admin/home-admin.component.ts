import {
  Component,
  OnInit
} from '@angular/core';

import { TitleAppService } from '@shared/module/title-app';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  constructor(private titleAppService: TitleAppService) {
  }

  ngOnInit() {
    this.titleAppService.setTitle('Hệ thống quản lí giải bóng đá Vô địch Quốc Gia');
  }

}
