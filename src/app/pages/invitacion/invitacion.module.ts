import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitacionPageRoutingModule } from './invitacion-routing.module';

import { InvitacionPage } from './invitacion.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitacionPageRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [InvitacionPage],
  providers: [
    Geolocation,
    DatePicker
  ]
})
export class InvitacionPageModule {}
