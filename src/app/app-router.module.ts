import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', redirectTo: 'actor', pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'actor',
    loadChildren: () => import('./actor-page/actor-page.module').then((m) => m.ActorPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRouterModule {}