import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalInstallationsPage } from './total-installations.page';

const routes: Routes = [
  {
    path: '',
    component: TotalInstallationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalInstallationsPageRoutingModule {}
