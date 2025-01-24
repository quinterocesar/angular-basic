import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private nombreLogo = 'Arkano Software';
  isLogedIn = false;
  logoSrc = 'assets/images/logo-dog-gallery.png';

  get logo() {
    return this.nombreLogo;
  }
}
