import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairTechniciansPageRoutingModule } from './repair-technicians-routing.module';

import { RepairTechniciansPage } from './repair-technicians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairTechniciansPageRoutingModule
  ],
  declarations: [RepairTechniciansPage]
})
export class RepairTechniciansPageModule {}
