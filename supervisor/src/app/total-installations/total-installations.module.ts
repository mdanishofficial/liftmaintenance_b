import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalInstallationsPageRoutingModule } from './total-installations-routing.module';

import { TotalInstallationsPage } from './total-installations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalInstallationsPageRoutingModule
  ],
  declarations: [TotalInstallationsPage]
})
export class TotalInstallationsPageModule {}
