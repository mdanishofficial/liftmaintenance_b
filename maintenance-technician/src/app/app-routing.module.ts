import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'visit-details',
    loadChildren: () => import('./visit-details/visit-details.module').then( m => m.VisitDetailsPageModule)
  },
  {
    path: 'upcoming-visits',
    loadChildren: () => import('./upcoming-visits/upcoming-visits.module').then( m => m.UpcomingVisitsPageModule)
  },
  {
    path: 'previous-visits',
    loadChildren: () => import('./previous-visits/previous-visits.module').then( m => m.PreviousVisitsPageModule)
  },
  {
    path: 'details-of-visit',
    loadChildren: () => import('./details-of-visit/details-of-visit.module').then( m => m.DetailsOfVisitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
