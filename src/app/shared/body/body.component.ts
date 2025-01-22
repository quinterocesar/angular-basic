import { Component, Input } from "@angular/core";
import { Image } from "../../interfaces/image-list.interface";


@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent {
  @Input() imageList: Image[] = [];

  constructor() {
    console.log("BodyComponent constructor");
  }

  ngOnInit() {
    console.log("BodyComponent ngOnInit");
  }

  ngOnDestroy() {
    console.log("BodyComponent ngOnDestroy");
  }
}
