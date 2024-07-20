import { Component, Self } from '@angular/core';
import { PageService } from '../page/services/page.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  providers: [PageService]
})
export class ContentComponent {
  name: string = 'name1';

  constructor(@Self() private pageService: PageService) {

  }
}
