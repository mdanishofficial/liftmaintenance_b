import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalContractsPage } from './total-contracts.page';

const routes: Routes = [
  {
    path: '',
    component: TotalContractsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalContractsPageRoutingModule {}
