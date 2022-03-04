import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingComplainsPage } from './pending-complains.page';

const routes: Routes = [
  {
    path: '',
    component: PendingComplainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingComplainsPageRoutingModule {}
