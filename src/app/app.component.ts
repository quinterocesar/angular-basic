import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { BodyComponent } from "./shared/body/body.component";
import imageList from "./constants/data";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dogs Gallery';
  imageLIst = imageList;

}


