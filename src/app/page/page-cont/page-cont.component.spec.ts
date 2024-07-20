import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContComponent } from './page-cont.component';

describe('PageContComponent', () => {
  let component: PageContComponent;
  let fixture: ComponentFixture<PageContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
