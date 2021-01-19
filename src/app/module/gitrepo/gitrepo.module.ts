import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitrepoComponent } from './gitrepo.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { RouterModule, Routes } from '@angular/router';
import { GitrepoService } from './service/gitrepo.service';

const routes: Routes = [
  {
    path: '',
    component: GitrepoComponent,
  },
];
@NgModule({
  declarations: [GitrepoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgxPaginationModule],
  providers: [GitrepoService],
})
export class GitrepoModule {}
