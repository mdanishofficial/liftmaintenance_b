import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillmanagersPageRoutingModule } from './billmanagers-routing.module';

import { BillmanagersPage } from './billmanagers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillmanagersPageRoutingModule
  ],
  declarations: [BillmanagersPage]
})
export class BillmanagersPageModule {}
