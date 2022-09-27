import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBirdPage } from './create-bird.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBirdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBirdPageRoutingModule {}
