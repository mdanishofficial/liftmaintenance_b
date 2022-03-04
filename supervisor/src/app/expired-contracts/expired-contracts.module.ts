import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpiredContractsPageRoutingModule } from './expired-contracts-routing.module';

import { ExpiredContractsPage } from './expired-contracts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpiredContractsPageRoutingModule
  ],
  declarations: [ExpiredContractsPage]
})
export class ExpiredContractsPageModule {}
