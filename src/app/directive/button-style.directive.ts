
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  private hover(shouldHover: boolean) {
    if (shouldHover) {
      this.el.nativeElement.style.backgroundColor = '#45a049'; // צבע רקע בעת העכברוש
    } else {
      this.el.nativeElement.style.backgroundColor = '#4CAF50'; // צבע רקע
    }
  }
}

