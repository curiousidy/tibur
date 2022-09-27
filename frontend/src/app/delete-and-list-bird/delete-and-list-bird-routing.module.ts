import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAndListBirdPage } from './delete-and-list-bird.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAndListBirdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAndListBirdPageRoutingModule {}
