import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceManagerDetailPage } from './maintenance-manager-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceManagerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceManagerDetailPageRoutingModule {}
