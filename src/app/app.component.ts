import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import imageList from "./constants/data";
import { ImageInterface } from './interfaces/image-list.interface';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, SidebarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dogs Gallery';
  imageList = imageList;
  selectedImage: ImageInterface | null = null;

  logImage(image: ImageInterface) {
    this.selectedImage = image;
  }
}


