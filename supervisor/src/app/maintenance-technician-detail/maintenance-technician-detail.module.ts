import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceTechnicianDetailPageRoutingModule } from './maintenance-technician-detail-routing.module';

import { MaintenanceTechnicianDetailPage } from './maintenance-technician-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceTechnicianDetailPageRoutingModule
  ],
  declarations: [MaintenanceTechnicianDetailPage]
})
export class MaintenanceTechnicianDetailPageModule {}
