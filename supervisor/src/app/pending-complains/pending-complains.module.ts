import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingComplainsPageRoutingModule } from './pending-complains-routing.module';

import { PendingComplainsPage } from './pending-complains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingComplainsPageRoutingModule
  ],
  declarations: [PendingComplainsPage]
})
export class PendingComplainsPageModule {}
