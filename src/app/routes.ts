import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
    title: 'Home details',
  },
];
export default routeConfig;
