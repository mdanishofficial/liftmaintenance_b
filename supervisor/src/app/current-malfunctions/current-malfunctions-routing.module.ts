import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentMalfunctionsPage } from './current-malfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentMalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentMalfunctionsPageRoutingModule {}
