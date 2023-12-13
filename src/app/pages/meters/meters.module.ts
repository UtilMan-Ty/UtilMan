import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetersPageRoutingModule } from './meters-routing.module';

import { MetersPage } from './meters.page';
import { MeterCardComponent } from 'src/app/components/meter-card/meter-card.component';
import { KvaCardComponent } from 'src/app/components/kva-card/kva-card.component';
import { KwhCardComponent } from 'src/app/components/kwh-card/kwh-card.component';
import { KwhsCardComponent } from 'src/app/components/kwhs-card/kwhs-card.component';
import { KwhoCardComponent } from 'src/app/components/kwho-card/kwho-card.component';
import { KwhpCardComponent } from 'src/app/components/kwhp-card/kwhp-card.component';
import { KvarhCardComponent } from 'src/app/components/kvarh-card/kvarh-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetersPageRoutingModule
  ],
  declarations: [MetersPage, MeterCardComponent,KvaCardComponent,KwhCardComponent,KwhsCardComponent, KwhoCardComponent,KwhpCardComponent,KvarhCardComponent]
})
export class MetersPageModule {}
