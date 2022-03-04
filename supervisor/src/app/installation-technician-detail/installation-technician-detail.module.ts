import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationTechnicianDetailPageRoutingModule } from './installation-technician-detail-routing.module';

import { InstallationTechnicianDetailPage } from './installation-technician-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationTechnicianDetailPageRoutingModule
  ],
  declarations: [InstallationTechnicianDetailPage]
})
export class InstallationTechnicianDetailPageModule {}
