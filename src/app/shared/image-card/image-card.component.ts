import { Component, Input } from "@angular/core";
import { ImageInterface } from "../../interfaces/image-list.interface";

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html',
    styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() image: ImageInterface | null = null;


}
