import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpiredContractsPage } from './expired-contracts.page';

const routes: Routes = [
  {
    path: '',
    component: ExpiredContractsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpiredContractsPageRoutingModule {}
