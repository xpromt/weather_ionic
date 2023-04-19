import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'hello-tab',
        loadComponent: () =>
          import('./hello-tab/hello-tab.page').then((m) => m.HelloTabPage),
      },
      {
        path: 'world-tab',
        loadComponent: () =>
          import('./world-tab/world-tab.page').then((m) => m.WorldTabPage),
      },
      {
        path: 'result-tab',
        loadComponent: () =>
          import('./result-tab/result-tab.page').then((m) => m.ResultTabPage),
      },
      {
        path: '',
        redirectTo: '/tabs/hello-tab',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/hello-tab',
    pathMatch: 'full',
  },
];
