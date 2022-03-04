import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalMalfunctionsPageRoutingModule } from './total-malfunctions-routing.module';

import { TotalMalfunctionsPage } from './total-malfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalMalfunctionsPageRoutingModule
  ],
  declarations: [TotalMalfunctionsPage]
})
export class TotalMalfunctionsPageModule {}
