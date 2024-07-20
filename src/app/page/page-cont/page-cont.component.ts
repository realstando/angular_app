import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { MorePage } from '../page';

@Component({
  selector: 'app-page-cont',
  templateUrl: './page-cont.component.html',
  styleUrl: './page-cont.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContComponent implements OnChanges, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      
    }
  }
  ngOnDestroy() {
    console.log('destroyed');
  }

  @Input() title: string = '';

  @Input() pages:MorePage[] | null = [];

  @Output() selected = new EventEmitter<MorePage>();

  select(page: MorePage) {
    this.selected.emit(page);
  }
}
