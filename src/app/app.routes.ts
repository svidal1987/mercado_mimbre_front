import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ejemplos/welcome' },
  { path: 'ejemplos/welcome', loadChildren: () => import('./ejemplos/pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'ejemplos/component', loadChildren: () => import('./ejemplos/pages/home/component1/component1.routes').then(m => m.COMPONENT1_ROUTES) }
];
