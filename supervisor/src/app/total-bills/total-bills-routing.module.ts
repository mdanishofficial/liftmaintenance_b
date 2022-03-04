import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalBillsPage } from './total-bills.page';

const routes: Routes = [
  {
    path: '',
    component: TotalBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalBillsPageRoutingModule {}
