import { Component } from "@angular/core";
import { getDate } from "../../utils/date.utils";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = Number(getDate());
  author: string = 'Darío Gerez';

  calcTime(): number {
    return this.currentYear + 5;
  }
 }
