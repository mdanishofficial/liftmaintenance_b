import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagerDetailPageRoutingModule } from './installation-manager-detail-routing.module';

import { InstallationManagerDetailPage } from './installation-manager-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagerDetailPageRoutingModule
  ],
  declarations: [InstallationManagerDetailPage]
})
export class InstallationManagerDetailPageModule {}
