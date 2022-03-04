import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentMonthExpiringPageRoutingModule } from './current-month-expiring-routing.module';

import { CurrentMonthExpiringPage } from './current-month-expiring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentMonthExpiringPageRoutingModule
  ],
  declarations: [CurrentMonthExpiringPage]
})
export class CurrentMonthExpiringPageModule {}
