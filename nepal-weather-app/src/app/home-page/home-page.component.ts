import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isSunny: boolean = false;

  sunnyImage: string = 'https://res.cloudinary.com/dqgdpbbtv/image/upload/v1746171737/nepal%20weather%20app/lyq21gwrb4vflchqxfj0.png';
  rainyImage: string = 'https://res.cloudinary.com/dqgdpbbtv/image/upload/v1746171737/nepal%20weather%20app/cbc8psqtje7ayxllxhsm.png';

  @Output() backBtnClick = new EventEmitter<string>();

  onBackBtnClick() {
    this.backBtnClick.emit("home-page");
  }

}
