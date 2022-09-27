import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBirdsPageRoutingModule } from './my-birds-routing.module';

import { MyBirdsPage } from './my-birds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBirdsPageRoutingModule
  ],
  declarations: [MyBirdsPage]
})
export class MyBirdsPageModule {}
