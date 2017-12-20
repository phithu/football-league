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
  @Input('typeImages') typeImages: string = 'avatar';
  @Input('useDefault') useDefault: boolean = false;

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.width.px = this.size;
    // this.element.nativeElement.style.height.px = this.size;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.element.nativeElement.style.width = `${this.size}px`;
    this.element.nativeElement.style.height = `${this.size}px`;
  }

}
