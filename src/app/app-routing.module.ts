import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/GitRepo', pathMatch: 'full' },
  {
    path: 'GitRepo',
    //angular
    loadChildren: () =>
      import(`./module/gitrepo/gitrepo.module`).then((m) => m.GitrepoModule),

    // lazy loading in angular 7
    // loadChildren: './modules/signup/signup.module#SignupModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
