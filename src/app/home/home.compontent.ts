import { Component } from "@angular/core";
import { ImageCardComponent } from "../shared/image-card/image-card.component";
import { ImageInterface } from "../interfaces/image-list.interface";
import imageList from "../constants/data";

@Component({
  selector: "app-home",
  imports: [ImageCardComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  imageList: ImageInterface[] = imageList;
  imageSelected: ImageInterface | null = null;

  handleImgaClick(image: ImageInterface): void {
    this.imageSelected = image;
  }

  onShowList() {
    this.imageSelected = null;
  }

}
