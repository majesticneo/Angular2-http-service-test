import { Component } from '@angular/core';

@Component({ // decorator of the component.
  selector: 'app-root', // here is the selector used like customised HTML tag
  templateUrl: './app.component.html', // HTML code fragment called by this component
  styleUrls: ['./app.component.css'] // CSS fragment attached to this HTML component
})
export class AppComponent { // class used by the component
  title = 'Mon application Fonctionne et se lance bien !!!!';
}
