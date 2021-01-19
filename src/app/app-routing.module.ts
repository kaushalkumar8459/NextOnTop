import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/GitRepo', pathMatch: 'full' },
  {
    path: 'GitRepo',
    loadChildren: () =>
      import(`./module/gitrepo/gitrepo.module`).then((m) => m.GitrepoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
