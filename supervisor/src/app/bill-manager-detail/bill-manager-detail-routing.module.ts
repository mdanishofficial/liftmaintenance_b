import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillManagerDetailPage } from './bill-manager-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BillManagerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillManagerDetailPageRoutingModule {}
