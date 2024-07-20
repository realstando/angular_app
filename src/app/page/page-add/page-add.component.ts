import { Component } from '@angular/core';
import { MorePage } from '../page';
import { PageService } from '../services/page.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.component.html',
  styleUrl: './page-add.component.scss',
})
export class PageAddComponent {
  constructor(private pageService: PageService) {}

  page: MorePage = {
    pageNum: '',
    pageStr1: '',
    pageStr2: '',
    pageType: '',
    pageTime1: new Date(),
    pageTime2: new Date(),
    deci: 0,
  };

  successMsg: string = '';

  AddPage(pageForm: NgForm) {
    this.pageService.addPage(this.page).subscribe((data) => {
      this.successMsg = 'Page added successfully';
      pageForm.reset();
    });
  }
}
