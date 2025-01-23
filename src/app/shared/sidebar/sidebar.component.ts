import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Image } from "../../interfaces/image-list.interface";


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() imageList: Image[] = [];
  @Output() selectedImage = new EventEmitter<Image>();

  constructor() {
    console.log("SidebarComponent constructor");
  }

  ngOnInit() {
    console.log("SidebarComponent ngOnInit");
  }

  ngOnDestroy() {
    console.log("SidebarComponent ngOnDestroy");
  }

  handleSelectedImage(image: Image) {
    this.selectedImage.emit(image);
  }
}
