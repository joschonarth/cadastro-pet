import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pet-registration',
    loadComponent: () =>
      import('./features/pet-informations/pet-form/pet-form').then((m) => m.PetForm),
  },
  {
    path: 'pet-summary',
    loadComponent: () =>
      import('./features/pet-informations/pet-summary/pet-summary').then((m) => m.PetSummary),
  },
  { path: '', redirectTo: 'pet-registration', pathMatch: 'full' },
  { path: '**', redirectTo: 'pet-registration', pathMatch: 'full' },
];
