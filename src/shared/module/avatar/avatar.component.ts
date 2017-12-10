import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnChanges {

  @Input('imagesURL') imagesURL: string;
  @Input('size') size: number = 40;
  @Input('fontSize') fontSize: number;

  constructor(private element: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.element.nativeElement.style.width = `${this.size}px`;
    this.element.nativeElement.style.height = `${this.size}px`;
  }

}
