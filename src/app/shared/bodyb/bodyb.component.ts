import { Component } from "@angular/core";

@Component({
  selector: "app-bodyb",
  templateUrl: "./bodyb.component.html",
  styleUrls: ["./bodyb.component.scss"]
})
export class BodyBComponent {
  constructor() {
    console.log("BodyBComponent constructor");
  }

  ngOnInit() {
    console.log("BodyBComponent ngOnInit");
  }

  ngOnDestroy() {
    console.log("BodyBComponent ngOnDestroy");
  }

}
