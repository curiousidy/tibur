import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-birds',
    loadChildren: () => import('./my-birds/my-birds.module').then( m => m.MyBirdsPageModule)
  },
  {
    path: 'create-bird',
    loadChildren: () => import('./create-bird/create-bird.module').then( m => m.CreateBirdPageModule)
  },
  
  {
    path: 'update-bird',
    loadChildren: () => import('./update-bird/update-bird.module').then( m => m.UpdateBirdPageModule)
  },
  {
    path: 'delete-and-list-bird',
    loadChildren: () => import('./delete-and-list-bird/delete-and-list-bird.module').then( m => m.DeleteAndListBirdPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
