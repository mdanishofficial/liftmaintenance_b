import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagersListPageRoutingModule } from './installation-managers-list-routing.module';

import { InstallationManagersListPage } from './installation-managers-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagersListPageRoutingModule
  ],
  declarations: [InstallationManagersListPage]
})
export class InstallationManagersListPageModule {}
