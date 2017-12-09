import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/service/auth';

@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./toolbar-admin.component.scss'],
  exportAs: 'toolbar'
})
export class ToolbarAdminComponent implements OnInit {


  @Output('onMenu') onMenu = new EventEmitter();

  public dataUser: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  public ngOnInit() {
    this.dataUser = this.authService.getDataLogin();
  }

  public menuClick() {
    this.onMenu.emit();
  }

  public logOut() {
    this.authService.logout().subscribe((response) => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }
}
