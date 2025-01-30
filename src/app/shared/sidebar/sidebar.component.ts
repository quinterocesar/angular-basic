import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ImageInterface } from "../../interfaces/image-list.interface";


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() imageList: ImageInterface[] = [];
  @Output() selectedImage = new EventEmitter<ImageInterface>();

  constructor() {
    console.log("SidebarComponent constructor");
  }

  ngOnInit() {
    console.log("SidebarComponent ngOnInit");
  }

  ngOnDestroy() {
    console.log("SidebarComponent ngOnDestroy");
  }

  handleSelectedImage(image: ImageInterface) {
    this.selectedImage.emit(image);
  }
}
