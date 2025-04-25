import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'About Me';
  description = 'I am a passionate developer with experience in various technologies...';
  // Agrega más propiedades según necesites
}