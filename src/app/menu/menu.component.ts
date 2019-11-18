import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  // public: epeidh h metavlhth xrhsimopoieitai sthn html, th dhlwnoume ws public
  public title: string = 'my first menu';

  // string[] 'h alliws Array<string>: pinakas apo string
  // (string|number)[] 'h any[] : an exei keimeno string klp
  public menu: string[] = [
    'Home',
    'About',
    'Products',
    'Contact'];

}
