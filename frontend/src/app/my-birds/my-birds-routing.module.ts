import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBirdsPage } from './my-birds.page';

const routes: Routes = [
  {
    path: '',
    component: MyBirdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBirdsPageRoutingModule {}
