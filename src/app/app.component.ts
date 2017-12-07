import {
  Component,
  OnInit
} from '@angular/core';
import { ProgressBarService } from '../shared/module/progress-bar';
import {
  NavigationEnd,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private progressService: ProgressBarService) {

  }

  public ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.progressService.start();
      } else if (event instanceof NavigationEnd) {
        // Hide progress bar
        this.progressService.done();
      }
    });
  }
}
