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

  public TYPE_IMAGES = {
    AVATAR: 'avatar',
    LOGO: 'logo'
  };

  @Input('imagesURL') imagesURL: string;
  @Input('size') size = 40;
  @Input('fontSize') fontSize: number;
  @Input('typeImages') typeImages = this.TYPE_IMAGES.AVATAR;
  @Input('useDefault') useDefault = false;

  constructor(private element: ElementRef) {
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
