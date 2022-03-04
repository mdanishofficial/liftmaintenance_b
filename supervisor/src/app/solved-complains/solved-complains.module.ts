import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedComplainsPageRoutingModule } from './solved-complains-routing.module';

import { SolvedComplainsPage } from './solved-complains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedComplainsPageRoutingModule
  ],
  declarations: [SolvedComplainsPage]
})
export class SolvedComplainsPageModule {}
