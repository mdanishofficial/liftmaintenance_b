import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceTechnicianDetailPage } from './maintenance-technician-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceTechnicianDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceTechnicianDetailPageRoutingModule {}
