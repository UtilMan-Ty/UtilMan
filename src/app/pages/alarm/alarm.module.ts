import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { AlarmPageRoutingModule } from './alarm-routing.module';

import { AlarmPage } from './alarm.page';

import { SqlComponent } from 'src/app/components/sql/sql.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AlarmPage, SqlComponent],
  providers: [],
})
export class AlarmPageModule {}
