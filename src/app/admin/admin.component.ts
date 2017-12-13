import {
  Component,
  OnInit,
} from '@angular/core';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // public titleToolbar: string = 'Hệ thống quản lí giải bóng đá Vô địch Quốc Gia';

  constructor() {
  }

  ngOnInit() {
    // console.log(this.activatedRoute);
    // this.router.events
    //   .filter(item => item instanceof NavigationStart)
    //   .map(item => item['url'])
    //   .subscribe((URLRouter) => {
    //     switch (URLRouter) {
    //       case '/user/add-user' : {
    //         this.titleToolbar = 'Thêm Người Dùng';
    //         break;
    //       }
    //       case '/user/edit-user': {
    //         this.titleToolbar = 'Chỉnh sửa thông tin người dùng';
    //         break;
    //       }
    //
    //     }
    //     if (URLRouter.search('/profile') >= 0) {
    //       this.titleToolbar = 'Trang cá nhân'
    //     }
    //   });
  }


}


