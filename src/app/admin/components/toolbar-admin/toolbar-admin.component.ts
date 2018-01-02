import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import { AuthService } from '../../../../shared/service/auth';
import { TitleAppService } from '../../../../shared/module/title-app';


@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./toolbar-admin.component.scss'],
  exportAs: 'toolbar',
  animations: [
    trigger('widthSearch', [
      state('inactive', style({
        width: '0',
      })),
      state('active', style({
        width: '100%',
      })),
      transition('inactive <=> active', animate('300ms ease')),
    ])
  ]
})
export class ToolbarAdminComponent implements OnInit, AfterViewInit {

  public isLoading = false;
  public titleToolbar: string;
  public toggleContainer = true;
  @Output('onMenu') onMenu = new EventEmitter();
  @ViewChild('inputSearch') public inputSearch: ElementRef;

  public dataUser: any;
  public state = 'inactive';

  constructor(private authService: AuthService,
              private router: Router,
              private titleAppService: TitleAppService) {
  }

  public ngOnInit() {
    this.dataUser = this.authService.getDataLogin();
    this.titleAppService.getTitle
      .subscribe(title => {
        this.titleToolbar = title;
      });
  }

  public ngAfterViewInit() {
    this.onSearch();
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

  public toggleSearch() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

  public onSearch() {
    Observable.fromEvent(this.inputSearch.nativeElement, 'keyup')
      .do(() => this.isLoading = true)
      .map((event: any) => event.target.value)
      .debounceTime(300)
      .subscribe((value) => {
        this.isLoading = false;
      });
  }


}
