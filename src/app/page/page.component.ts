import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MorePage, Page } from './page';
import { PageContComponent } from './page-cont/page-cont.component';
import { HeaderComponent } from '../header/header.component';
import { PageService } from './services/page.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements DoCheck, OnInit, AfterViewInit {
  ngDoCheck(): void {
    // console.log('on changes');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Header';
    this.headerChildrenComponent.last.title = 'last';
  }
  ngOnInit() {
    this.pageService.getPhotos().subscribe((event) => {
      console.log(event);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('request sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('response success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          console.log('download progress');
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
    this.stream.subscribe((data) => console.log(data));
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
    });
    // this.pageService.getPages$.subscribe(pages => {
    //   this.morePages = pages;
    // });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  totalBytes = 0;

  subscription!: Subscription;
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();

  pages$ = this.pageService.getPages$.pipe(
    catchError((error) => {
      // console.log(error);
      this.error$.next(error.message);
      return of([]);
    })
  );

  pagesCount$ = this.pageService.getPages$.pipe(map((pages) => pages.length));

  constructor(
    @SkipSelf() private pageService: PageService,
    private configService: ConfigService
  ) {}

  name = 'dude';
  abc = 'huh';
  bool = true;
  selected!: MorePage;

  stream = new Observable((observer) => {
    observer.next('observer data 1');
    observer.next('observer data 2');
    observer.next('observer data 3');
    observer.complete();
    // observer.error('observer error');
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // pageService = new PageService();

  pages: Page = {
    testNum1: 123,
    testNum2: 456,
    testNum3: 789,
  };
  morePages: MorePage[] = [];

  title = 'Pages';
  btn() {
    this.bool = !this.bool;
    this.title = 'Page';
  }

  select(page: MorePage) {
    this.selected = page;
  }

  add() {
    const page: MorePage = {
      pageType: 'addedPage',
      pageStr1: 'string5',
      pageNum: '1234',
      pageStr2: 'string4',
      pageTime1: new Date('4-Jul-2024'),
      pageTime2: new Date('4-Jul-2024'),
      deci: 123.456,
    };
    // this.morePages.push(page);
    // this.morePages = [...this.morePages, page];
    this.pageService.addPage(page).subscribe((data) => {
      this.morePages = data;
    });
  }
  edit() {
    const page: MorePage = {
      pageType: 'editedPage',
      pageStr1: 'string5',
      pageNum: '3',
      pageStr2: 'string4',
      pageTime1: new Date('4-Jul-2024'),
      pageTime2: new Date('4-Jul-2024'),
      deci: 123.456,
    };
    this.pageService.editPage(page).subscribe((data) => {
      this.morePages = data;
    });
  }
  delete() {
    this.pageService.deletePage('3').subscribe((data) => {
      this.morePages = data;
    });
  }
}
