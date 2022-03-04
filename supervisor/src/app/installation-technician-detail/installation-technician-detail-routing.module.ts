import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationTechnicianDetailPage } from './installation-technician-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationTechnicianDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationTechnicianDetailPageRoutingModule {}
