import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalBillsPageRoutingModule } from './total-bills-routing.module';

import { TotalBillsPage } from './total-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalBillsPageRoutingModule
  ],
  declarations: [TotalBillsPage]
})
export class TotalBillsPageModule {}
