import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightTr]'
})
export class HighlightTrDirective {

  constructor(private eleRef: ElementRef) {
    console.log('appHighlightTr called' )
   }

   @HostListener('mouseenter', ['$event'])
   onMouseEnter(event:any) {
       console.log("mouseenter...");
       this.eleRef.nativeElement.style.backgroundColor  ='red';
   }
   @HostListener('mouseleave', ['$event'])
   onMouseLeave(event:any) {
       console.log("mouseenter...");
       this.eleRef.nativeElement.style.backgroundColor  ='white';
   }

}
