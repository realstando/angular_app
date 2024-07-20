import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-page-more',
  templateUrl: './page-more.component.html',
  styleUrl: './page-more.component.scss',
})
export class PageMoreComponent {
  id: number = 0;
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    // this.id$ = this.router.paramMap.subscribe((params) => {params.get('id')});
    // this.router.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
  }
}
