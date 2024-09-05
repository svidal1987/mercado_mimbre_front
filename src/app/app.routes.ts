import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'component', loadChildren: () => import('./pages/home/component1/component1.routes').then(m => m.COMPONENT1_ROUTES) }
];
