import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairTechnicianDetailPageRoutingModule } from './repair-technician-detail-routing.module';

import { RepairTechnicianDetailPage } from './repair-technician-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairTechnicianDetailPageRoutingModule
  ],
  declarations: [RepairTechnicianDetailPage]
})
export class RepairTechnicianDetailPageModule {}
