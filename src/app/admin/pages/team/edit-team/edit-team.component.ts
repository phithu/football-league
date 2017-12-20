import {
  Component,
  OnInit
} from '@angular/core';

import { TitleAppService } from '../../../../../shared/module/title-app';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  constructor(private titleAppService: TitleAppService) {
  }

  public ngOnInit() {
    this.titleAppService.setTitle('Chỉnh sửa đội bóng');
  }

}
