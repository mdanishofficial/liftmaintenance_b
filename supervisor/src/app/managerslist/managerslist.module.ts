import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerslistPageRoutingModule } from './managerslist-routing.module';

import { ManagerslistPage } from './managerslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerslistPageRoutingModule
  ],
  declarations: [ManagerslistPage]
})
export class ManagerslistPageModule {}
