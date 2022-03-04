import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairTechnicianDetailPage } from './repair-technician-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RepairTechnicianDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairTechnicianDetailPageRoutingModule {}
