import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.compontent';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dog Gallery',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    title: 'About Us',
    component: AboutUsComponent,
  },
  {
    path: 'detail/:id',
    title: 'Image Detail',
    component: DetailComponent,
  },
];
