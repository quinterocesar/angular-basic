import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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

  goHome() {
    console.log('Haz hecho click en el logo');
  }
}
