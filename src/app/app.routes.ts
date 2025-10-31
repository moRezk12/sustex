import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./layouts/mainlayout/mainlayout.component').then(m => m.MainlayoutComponent),
    children: [
      {
        path : '' , redirectTo: 'golden', pathMatch: 'full'
      },
      {
        path: 'golden',
        loadComponent: () => import('./components/golden/golden.component').then(m => m.GoldenComponent),
        title: 'Golden'
      },
      {
        path : 'auttimated-chat',
        loadComponent: () => import('./components/auttimated-chat/auttimated-chat.component').then(m => m.AuttimatedChatComponent),
        title: 'Auttimated Chat'
      },
      {
        path : 'live-chat',
        loadComponent: () => import('./components/live-chat/live-chat.component').then(m => m.LiveChatComponent),
        title: 'Live Chat'
      },
      {
        path : 'guidance',
        loadComponent: () => import('./components/guidance/guidance.component').then(m => m.GuidanceComponent),
        title: 'Guidance'
      },
      {
        path : 'improvement',
        loadComponent: () => import('./components/improvement/improvement.component').then(m => m.ImprovementComponent),
        title: 'Improvement'
      },
      {
        path : 'pioneering',
        loadComponent: () => import('./components/pioneering/pioneering.component').then(m => m.PioneeringComponent),
        title: 'Pioneering'
      },
      {
        path : 'smart-self',
        loadComponent: () => import('./components/smart-self/smart-self.component').then(m => m.SmartSelfComponent),
        title: 'Smart Self'
      },
      {
        path : 'smart-training',
        loadComponent: () => import('./components/smart-training/smart-training.component').then(m => m.SmartTrainingComponent),
        title: 'Smart Training'
      }
    ]
  }

];
