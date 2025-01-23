import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import imageList from "./constants/data";
import { Image } from './interfaces/image-list.interface';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dogs Gallery';
  imageList = imageList;
  selectedImage: Image | null = null;

  logImage(image: Image) {
    this.selectedImage = image;
  }
}


