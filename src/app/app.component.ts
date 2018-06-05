import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Business Card';
  user = {
    name: 'Toto',
    JobTitle: 'Suppôt de satan',
    image: 'https://cdn.pixabay.com/photo/2017/01/31/14/22/dino-2024517_1280.png'
  };

  setName(text) {
    this.user.name = text;
  }
  setJob(text) {
    this.user.JobTitle = text;
  }
  setImage(text) {
    this.user.image = text;
  }
}
