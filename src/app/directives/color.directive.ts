import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';


@Directive({
    selector : '[appHighlight]'
})

export class ColorDirective{
   constructor(private elementRef: ElementRef, private renderer : Renderer2) {}

   @HostListener('mouseenter') onMouseEnter () {
      this.heighlight("yellow")
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.heighlight('')
   }

   private heighlight(color : string) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color' , color)
   }
}

