// // import { Directive, ElementRef, HostListener } from '@angular/core';
// // @Directive({
// //   selector: '[appButtonDirective]'
// // })
// // export class ButtonDirectiveDirective {
// //   constructor(private elementRef: ElementRef) {}

// //   @HostListener('mouseenter') onMouseEnter() {
// //     this.setHoverStyles(true);
// //   }

// //   @HostListener('mouseleave') onMouseLeave() {
// //     this.setHoverStyles(false);
// //   }

// //   private setHoverStyles(isHovering: boolean) {
// //     const element = this.elementRef.nativeElement;

// //     if (isHovering) {
// //       element.classList.add('grey-button');
// //       element.classList.remove('black-button');
// //     } else {
// //       element.classList.add('black-button');
// //       element.classList.remove('grey-button');
// //     }
// //   }
// // }



import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonDirective]'
})
export class ButtonDirectiveDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // מאפשר כתיבת סגנונות ישירות בקוד על ידי ה-Renderer2
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'black');
    renderer.setStyle(elementRef.nativeElement, 'color', 'white');
    renderer.setStyle(elementRef.nativeElement, 'border', '2px solid darkred');
    renderer.setStyle(elementRef.nativeElement, 'padding', '10px 20px');
    renderer.setStyle(elementRef.nativeElement, 'border-radius', '5px');
    renderer.setStyle(elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setHoverStyles(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHoverStyles(false);
  }

  private setHoverStyles(isHovering: boolean) {
    const element = this.elementRef.nativeElement;

    if (isHovering) {
      this.renderer.setStyle(element, 'background-color', 'gray');
      this.renderer.setStyle(element, 'color', 'black');
      this.renderer.setStyle(element, 'border', '2px solid darkgray');
    } else {
      this.renderer.setStyle(element, 'background-color', 'black');
      this.renderer.setStyle(element, 'color', 'white');
      this.renderer.setStyle(element, 'border', '2px solid darkred');
    }
  }
}
