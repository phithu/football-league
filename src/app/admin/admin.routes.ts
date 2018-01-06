import { Routes } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin';
import { AdminComponent } from './admin.component';
import { GuardService } from './module/guard';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule'
      },
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule'
      },
      {
        path: 'team',
        loadChildren: './pages/team/team.module#TeamModule'
      },
      {
        path: 'rule',
        loadChildren: './pages/rule/rule.module#RuleModule'
      },
      {
        path: 'table',
        loadChildren: './pages/table/table.module#TableModule'
      },
      {
        path: 'fixtures',
        loadChildren: './pages/fixtures/fixtures.module#FixturesModule'
      },
      {
        path: 'result',
        loadChildren: './pages/result/result.module#ResultModule'
      },
      {
        path: 'search-result',
        loadChildren: './pages/search-result/search-result.module#SearchResultModule'
      },
      {
        path: '',
        component: HomeAdminComponent,
        pathMatch: 'full'
      }
    ]
  }
];
