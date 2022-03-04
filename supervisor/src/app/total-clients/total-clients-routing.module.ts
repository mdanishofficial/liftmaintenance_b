import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalClientsPage } from './total-clients.page';

const routes: Routes = [
  {
    path: '',
    component: TotalClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalClientsPageRoutingModule {}
