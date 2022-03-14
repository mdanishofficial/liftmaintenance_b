import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsOfVisitPageRoutingModule } from './details-of-visit-routing.module';

import { DetailsOfVisitPage } from './details-of-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsOfVisitPageRoutingModule
  ],
  declarations: [DetailsOfVisitPage]
})
export class DetailsOfVisitPageModule {}
