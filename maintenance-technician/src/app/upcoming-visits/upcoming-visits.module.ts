import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingVisitsPageRoutingModule } from './upcoming-visits-routing.module';

import { UpcomingVisitsPage } from './upcoming-visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingVisitsPageRoutingModule
  ],
  declarations: [UpcomingVisitsPage]
})
export class UpcomingVisitsPageModule {}
