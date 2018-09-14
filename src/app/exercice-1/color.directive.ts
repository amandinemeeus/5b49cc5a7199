import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

// Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  // @HostListener('window:click', ['$event']) windowClick($event) {
  //   console.log($event);
  // }

@Directive({ selector: '[appColor]' })
export class ColorDirective {

    @HostBinding('style.backgroundColor') color: string;
    @HostListener('window:keydown', ['$event']) windowKeydown($event) {
        if ($event.key === "ArrowUp") {
            this.changeColor("cornflowerBlue")
        } 
        else if ($event.key === "ArrowDown") {
            this.changeColor("lightBlue ")
        } 
        else if ($event.key === "ArrowRight") {
            this.changeColor("darkCyan ")
        } 
        else if ($event.key === "ArrowLeft") {
            this.changeColor("lightSeaGreen")
        }
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    private changeColor(color: string) {
        this.color = color;
    }

}
