import {
  Component,
  ElementRef,
  Input,
  OnChanges
} from '@angular/core';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnChanges {

  @Input('imagesURL') imagesURL: string;
  @Input('size') size = 40;
  @Input('fontSize') fontSize: number;
  @Input('typeImages') typeImages = 'avatar';
  @Input('useDefault') useDefault = false;

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.width.px = this.size;
    // this.element.nativeElement.style.height.px = this.size;
  }

  ngOnChanges() {
    this.element.nativeElement.style.width = `${this.size}px`;
    this.element.nativeElement.style.height = `${this.size}px`;
  }

  public checkURL(url: string) {
    const regExp = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return regExp.test(url);
  }

}
