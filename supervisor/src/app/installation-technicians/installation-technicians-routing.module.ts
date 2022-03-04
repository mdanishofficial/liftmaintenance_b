import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationTechniciansPage } from './installation-technicians.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationTechniciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationTechniciansPageRoutingModule {}
