import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router
} from '@angular/router';
import { AccountService } from '../../../../shared/service/account';

@Injectable()
export class ProfileResolve implements Resolve<any> {
  constructor(private accountService: AccountService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const userID = route.paramMap.get('id');

    return this.accountService.getUserByID(userID)
      .map(response => {
        if (response.result) {
          return response;
        }
        this.router.navigate(['/']);
        return null;
      });
  }
}
