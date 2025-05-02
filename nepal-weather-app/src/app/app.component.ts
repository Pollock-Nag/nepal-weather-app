import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nepal-weather-app';
  isLandingPage: boolean = false;

  showLandingPage() {
    this.isLandingPage = true;
  }
  showHomePage() {
    this.isLandingPage = false;
  }
  
}
