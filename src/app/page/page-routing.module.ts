import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { PageAddComponent } from './page-add/page-add.component';
import { PageMoreComponent } from './page-more/page-more.component';
import { pageGuard } from './guards/page.guard';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    canActivateChild: [pageGuard],
    children: [
      { path: 'add', component: PageAddComponent },
      { path: ':id', component: PageMoreComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
