import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionpagoPageRoutingModule } from './confirmacionpago-routing.module';

import { ConfirmacionpagoPage } from './confirmacionpago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionpagoPageRoutingModule
  ],
  declarations: [ConfirmacionpagoPage]
})
export class ConfirmacionpagoPageModule {}
