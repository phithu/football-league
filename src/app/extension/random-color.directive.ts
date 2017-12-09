import {
  Directive,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[randomColor]'
})
export class RandomColorDirective {

  private listColor = ['#E91E63', '#4CAF50',
    '#FF5722', '#795548',
    '#9C27B0', '#673AB7'];

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.ramdomColor();
  }

  ramdomColor(): string {
    const index = Math.round(Math.random() * 5);
    return this.listColor[index];
  }

}
