import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHomePageComponent } from './book-home-page.component';

describe('BookHomePageComponent', () => {
  let component: BookHomePageComponent;
  let fixture: ComponentFixture<BookHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
