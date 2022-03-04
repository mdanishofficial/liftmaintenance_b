import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentMalfunctionsPageRoutingModule } from './current-malfunctions-routing.module';

import { CurrentMalfunctionsPage } from './current-malfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentMalfunctionsPageRoutingModule
  ],
  declarations: [CurrentMalfunctionsPage]
})
export class CurrentMalfunctionsPageModule {}
