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
    private initService: InitService
  ) {
    console.log(initService.config);
  }

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');
  }

  ngAfterViewInit() {
    this.name.nativeElement.innerText = 'name ref';
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(PageComponent);
  //   componentRef.instance.abc = "new string";
  // }
}
