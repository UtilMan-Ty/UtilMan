import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertsPageRoutingModule } from './alerts-routing.module';

import { AlertsPage } from './alerts.page';
import { AlertCardComponent } from 'src/app/components/alert-card/alert-card.component';
import {UserProfileComponent} from './user-profile-info'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertsPageRoutingModule
  ],
  declarations: [AlertsPage, AlertCardComponent, UserProfileComponent]
})
export class AlertsPageModule {}
