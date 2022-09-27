import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBirdPageRoutingModule } from './create-bird-routing.module';

import { CreateBirdPage } from './create-bird.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBirdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateBirdPage]
})
export class CreateBirdPageModule {}
