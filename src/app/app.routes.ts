import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/budget-planer/login', pathMatch: 'full' },
  {
    path: 'budget-planer',
    loadChildren: () => import('./budget-planer/budget-planer.module').then(m => m.BudgetPlanerModule)
  },
  { path: '**', redirectTo: '/budget-planer/login' } // Catch-all redirect
];
