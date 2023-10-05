import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
//this file is the first  file that is loaded by the application
export class AppComponent {
  public appPages! : any[];
  public labels! : any[];
  constructor() {}
}
