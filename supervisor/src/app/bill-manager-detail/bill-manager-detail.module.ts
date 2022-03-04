import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillManagerDetailPageRoutingModule } from './bill-manager-detail-routing.module';

import { BillManagerDetailPage } from './bill-manager-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillManagerDetailPageRoutingModule
  ],
  declarations: [BillManagerDetailPage]
})
export class BillManagerDetailPageModule {}
