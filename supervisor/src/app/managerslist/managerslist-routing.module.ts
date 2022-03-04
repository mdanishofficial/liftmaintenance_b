import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerslistPage } from './managerslist.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerslistPageRoutingModule {}
