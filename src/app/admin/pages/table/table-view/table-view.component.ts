import {
  Component,
  OnInit
} from '@angular/core';
import { TableApiService } from '../../../../../shared/service/table-api';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  public listTable: Array<any>;

  constructor(private tableApiService: TableApiService) {
  }

  public ngOnInit() {
    this.getTable();

  }

  public getTable() {
    this.tableApiService.getTable()
      .subscribe(response => {
        const {result, data} = response;
        if (result) {
          this.listTable = data;
        }
      });
  }

}
