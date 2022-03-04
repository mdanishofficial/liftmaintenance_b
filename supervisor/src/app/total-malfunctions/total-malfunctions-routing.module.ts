import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalMalfunctionsPage } from './total-malfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: TotalMalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalMalfunctionsPageRoutingModule {}
