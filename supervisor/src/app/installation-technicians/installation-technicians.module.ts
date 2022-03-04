import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationTechniciansPageRoutingModule } from './installation-technicians-routing.module';

import { InstallationTechniciansPage } from './installation-technicians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationTechniciansPageRoutingModule
  ],
  declarations: [InstallationTechniciansPage]
})
export class InstallationTechniciansPageModule {}
