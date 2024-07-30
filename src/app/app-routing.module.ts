import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { loginGuard, loginLoadGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'content', component: ContentComponent, canActivate: [loginGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
    canActivate: [loginGuard],
    canLoad: [loginLoadGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'more',
    loadChildren: () => import('./more/more.module').then((m) => m.MoreModule),
    // canActivate: [loginGuard],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
