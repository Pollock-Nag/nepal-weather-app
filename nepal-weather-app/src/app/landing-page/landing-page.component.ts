import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  @Output() showHomePage = new EventEmitter<string>();

  getWeatherData() {
    // Call the API to get the weather data
    // For now, we will just log a message to the console
    console.log("Getting weather data...");
    this.showHomePage.emit("home-page");
  }
}
