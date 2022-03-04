import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalClientsPageRoutingModule } from './total-clients-routing.module';

import { TotalClientsPage } from './total-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalClientsPageRoutingModule
  ],
  declarations: [TotalClientsPage]
})
export class TotalClientsPageModule {}
