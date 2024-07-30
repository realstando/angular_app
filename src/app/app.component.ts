import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Angular';

  role = 'Admin';

  @ViewChild('name', { static: false }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router,
  ) {
    console.log(initService.config);
  }

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   console.log(event);
    // });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)).subscribe(
        (event) => {
          console.log('Navigation Started');
        }
    )
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(
        (event) => {
          console.log('Navigation Completed');
        }
    )
    this.loggerService?.log('AppComponent.ngOnInit()');
  }

  ngAfterViewInit() {
    // this.name.nativeElement.innerText = 'name ref';
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(PageComponent);
  //   componentRef.instance.abc = "new string";
  // }
}
