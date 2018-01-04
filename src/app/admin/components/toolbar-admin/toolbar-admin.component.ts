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
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../../../../shared/service/auth';
import { TitleAppService } from '../../../../shared/module/title-app';
import { TeamApiService } from '../../../../shared/service/team-api';


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
  public listPlayerSearch: any;
  public showResultSearch = false; // WHETHER SHOW RESULT SEARCH
  @Output('onMenu') onMenu = new EventEmitter();
  @ViewChild('inputSearch') public inputSearch: ElementRef;

  public dataUser: any;
  public state = 'inactive';

  constructor(private authService: AuthService,
              private router: Router,
              private teamApiService: TeamApiService,
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
    this.onKeyUpSearchBar();
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

  public onKeyUpSearchBar() {
    Observable.fromEvent(this.inputSearch.nativeElement, 'keyup')
      .do(() => this.isLoading = true)
      .map((event: any) => event.target.value)
      .debounceTime(300)
      // .switchMap((value) => value ? this.teamApiService.searchPlayer(value) : null)
      .subscribe((keyword) => {
        if (keyword && keyword !== '') {
          this.searchPlayer(keyword);
        } else {
          // do something
          this.isLoading = false;
          this.showResultSearch = false;
        }
      });
  }

  public searchPlayer(namePlayer) {
    this.teamApiService.searchPlayer(namePlayer)
      .subscribe((response) => {
        this.isLoading = false;
        const {data, result} = response;
        if (result && data.length > 0) {
          this.showResultSearch = true;
          this.listPlayerSearch = data;
        } else {
          this.showResultSearch = false;
        }
        // this.showResultSearch = (result && data.length > 0);
        // console.log('res', response);
      });
  }
}
