import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillmanagersPage } from './billmanagers.page';

const routes: Routes = [
  {
    path: '',
    component: BillmanagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillmanagersPageRoutingModule {}
