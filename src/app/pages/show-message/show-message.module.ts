import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMessagePageRoutingModule } from './show-message-routing.module';

import { ShowMessagePage } from './show-message.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    ShowMessagePageRoutingModule
  ],
  declarations: [ShowMessagePage]
})
export class ShowMessagePageModule {}
