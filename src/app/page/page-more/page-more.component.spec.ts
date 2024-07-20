import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMoreComponent } from './page-more.component';

describe('PageMoreComponent', () => {
  let component: PageMoreComponent;
  let fixture: ComponentFixture<PageMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
