import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagersListPage } from './installation-managers-list.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationManagersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagersListPageRoutingModule {}
