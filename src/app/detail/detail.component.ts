import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ImageInterface } from "../interfaces/image-list.interface";
import imageList from "../constants/data";

@Component({
  selector: "app-detail",
  standalone: true,
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent {
  imageId: string | null = '';
  imageList: ImageInterface[] = imageList;
  selectedImage: ImageInterface | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.paramMap.get('id');

    if(this.imageId) {
      this.loadData(this.imageId);
    }
  }

  loadData(id: string) {
    this.selectedImage = this.imageList.find((image) => image.id === +id);
  }
}
