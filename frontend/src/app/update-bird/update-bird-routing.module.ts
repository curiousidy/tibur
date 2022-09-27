import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBirdPage } from './update-bird.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBirdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBirdPageRoutingModule {}
