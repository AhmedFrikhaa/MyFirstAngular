import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  tableau=['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'gray'];
  @HostBinding('style.borderColor') bc='';
  @HostBinding('style.color') color=''
  constructor() { }

  @HostListener('keypress') changeColor(){
    const indexbc =Math.floor(Math.random()*(this.tableau.length-1));
    const indexcolor =Math.floor(Math.random()*(this.tableau.length-1));
    this.bc=this.tableau[indexbc];
    this.color=this.tableau[indexcolor];
  }
}
