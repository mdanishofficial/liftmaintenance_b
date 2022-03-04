import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagerDetailPage } from './installation-manager-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationManagerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagerDetailPageRoutingModule {}
