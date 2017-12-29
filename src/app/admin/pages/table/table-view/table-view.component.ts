import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  public listTable = [
    {
      name: 'Đội bóng A',
      imagesURL: 'https://i.imgur.com/5hXCbOU.png',
      point: 13,
      match: 21,
      win: 32,
      draw: 21,
      lost: 21,
      goldDifference: 21
    },
    {
      name: 'Đội bóng B',
      imagesURL: 'https://i.imgur.com/5hXCbOU.png',
      point: 13,
      match: 21,
      win: 32,
      draw: 21,
      lost: 21,
      goldDifference: 21
    },
    {
      name: 'Đội bóng C',
      imagesURL: 'https://i.imgur.com/5hXCbOU.png',
      point: 13,
      match: 21,
      win: 32,
      draw: 21,
      lost: 21,
      goldDifference: 21
    },
    {
      name: 'Đội bóng D',
      imagesURL: 'https://i.imgur.com/5hXCbOU.png',
      point: 13,
      match: 21,
      win: 32,
      draw: 21,
      lost: 21,
      goldDifference: 21
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
