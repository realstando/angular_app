import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageContComponent } from './page-cont/page-cont.component';
import { PageComponent } from './page.component';
import { PageMoreComponent } from './page-more/page-more.component';
import { PageAddComponent } from './page-add/page-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    PageComponent,
    PageContComponent,
    PageMoreComponent,
    PageAddComponent,
  ],
  imports: [CommonModule, PageRoutingModule, FormsModule, HeaderModule],
})
export class PageModule {}
