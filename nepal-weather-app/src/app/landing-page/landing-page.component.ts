import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  @Output() showHomePage = new EventEmitter<string>();
  districts = [
    { name: 'Arghakhanchi', id: 0 },
    { name: 'Baglung', id: 1 },
    { name: 'Baitadi', id: 2 },
    { name: 'Bajang', id: 3 },
    { name: 'Banke', id: 4 },
    { name: 'Bara', id: 5 },
    { name: 'Bardiya', id: 6 },
    { name: 'Bhaktapur', id: 7 },
    { name: 'Chitawan', id: 8 },
    { name: 'Dadeldhura', id: 9 },
    { name: 'Dailekh', id: 10 },
    { name: 'Dang', id: 11 },
    { name: 'Darchula', id: 12 },
    { name: 'Dhading', id: 13 },
    { name: 'Dhankuta', id: 14 },
    { name: 'Dhanusa', id: 15 },
    { name: 'Dolkha', id: 16 },
    { name: 'Dolpa', id: 17 },
    { name: 'Doti', id: 18 },
    { name: 'Gorkha', id: 19 },
    { name: 'Gulmi', id: 20 },
    { name: 'Humla', id: 21 },
    { name: 'Ilam', id: 22 },
    { name: 'Jhapa', id: 23 },
    { name: 'Jumla', id: 24 },
    { name: 'Kabhre', id: 25 },
    { name: 'Kailali', id: 26 },
    { name: 'Kanchanpur', id: 27 },
    { name: 'Kaski', id: 28 },
    { name: 'Kathmandu', id: 29 },
    { name: 'Lalitpur', id: 30 },
    { name: 'Lamjung', id: 31 },
    { name: 'Mahottari', id: 32 },
    { name: 'Makwanpur', id: 33 },
    { name: 'Manang', id: 34 },
    { name: 'Morang', id: 35 },
    { name: 'Mugu', id: 36 },
    { name: 'Mustang', id: 37 },
    { name: 'Myagdi', id: 38 },
    { name: 'Nawalparasi', id: 39 },
    { name: 'Nuwakot', id: 40 },
    { name: 'Okhaldhunga', id: 41 },
    { name: 'Palpa', id: 42 },
    { name: 'Panchther', id: 43 },
    { name: 'Parbat', id: 44 },
    { name: 'Rasuwa', id: 45 },
    { name: 'Routahat', id: 46 },
    { name: 'Rukum', id: 47 },
    { name: 'Rupandehi', id: 48 },
    { name: 'Salyan', id: 49 },
    { name: 'Sankhuwasabha', id: 50 },
    { name: 'Saptari', id: 51 },
    { name: 'Sarlahi', id: 52 },
    { name: 'Sindhuli', id: 53 },
    { name: 'Solukhumbu', id: 54 },
    { name: 'Sunsari', id: 55 },
    { name: 'Surkhet', id: 56 },
    { name: 'Syangja', id: 57 },
    { name: 'Tanahun', id: 58 },
    { name: 'Taplejung', id: 59 },
    { name: 'Terhathum', id: 60 },
    { name: 'Udayapur', id: 61 }
  ];

  selectedDate: Date | null = null;
  selectedDistrict: string | null = null;



  getWeatherData() {
    // Call the API to get the weather data
    console.log("Getting weather data...");
    console.log('Selected Date:', this.selectedDate);
    console.log('Selected District:', this.selectedDistrict);
    this.showHomePage.emit("home-page");
  }
}
