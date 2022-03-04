import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceManagerDetailPageRoutingModule } from './maintenance-manager-detail-routing.module';

import { MaintenanceManagerDetailPage } from './maintenance-manager-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceManagerDetailPageRoutingModule
  ],
  declarations: [MaintenanceManagerDetailPage]
})
export class MaintenanceManagerDetailPageModule {}
