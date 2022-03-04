import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalContractsPageRoutingModule } from './total-contracts-routing.module';

import { TotalContractsPage } from './total-contracts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalContractsPageRoutingModule
  ],
  declarations: [TotalContractsPage]
})
export class TotalContractsPageModule {}
