import { Component, ContentChild, Host, Self } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { PageService } from '../page/services/page.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  // providers: [PageService]
})
export class ContainerComponent {
  ngAfterContentInit() {
    console.log(this.content);
    this.content.name = 'changed in container ts';
  }

  @ContentChild(ContentComponent) content!: ContentComponent;

  // constructor(@Host() private pageService: PageService) {

  // }
}
