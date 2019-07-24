// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'ngseomdbref';
// }

import {AfterViewInit, Component} from '@angular/core';
import 'jarallax';
declare var jarallax: any;
@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  selectedIndex: number = null;
 link = [
  { link: '#home', label: 'Home' },
  { link: '#subscribe', label: 'Subscribe' },
  { link: '#directions', label: 'Directions' },
  { link: '#contactus', label: 'Contact Us' },
  { link: '#about', label: 'About' },
 ];
  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

  setIndex(index: number) {
     this.selectedIndex = index;
  }
}
