import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @HostBinding('class.open') 
    isOpen: boolean = false;

    // @HostListener('click') 
    // dropDownToggle(EventData: Event) {
    //     console.log("hostlistener click event...")
    //     // // we can do all this below just with the hostbinding code above!
    //     // if(this.isShown) {
    //     //     console.log("not shown, adding...")
    //     //     this.renderer.removeClass(this.elementRef.nativeElement.parentNode, 'open')
    //     // } else {
    //     //     console.log("not shown, adding...")
    //     //     this.renderer.addClass(this.elementRef.nativeElement.parentNode, 'open');
    //     // }
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
}