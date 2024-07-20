import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { PageAddComponent } from './page-add/page-add.component';
import { PageMoreComponent } from './page-more/page-more.component';

const routes: Routes = [
  { path: 'page', component: PageComponent },
  { path: 'page/add', component: PageAddComponent },
  { path: 'page/:id', component: PageMoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
