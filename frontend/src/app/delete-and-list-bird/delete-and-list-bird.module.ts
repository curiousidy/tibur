import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAndListBirdPageRoutingModule } from './delete-and-list-bird-routing.module';

import { DeleteAndListBirdPage } from './delete-and-list-bird.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAndListBirdPageRoutingModule
  ],
  declarations: [DeleteAndListBirdPage]
})
export class DeleteAndListBirdPageModule {}
