import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./layouts/mainlayout/mainlayout.component').then(m => m.MainlayoutComponent),
    children: [

    ]
  }

];
