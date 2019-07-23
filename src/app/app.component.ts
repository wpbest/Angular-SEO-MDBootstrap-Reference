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

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }
}