import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBirdPageRoutingModule } from './update-bird-routing.module';

import { UpdateBirdPage } from './update-bird.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBirdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateBirdPage]
})
export class UpdateBirdPageModule {}
