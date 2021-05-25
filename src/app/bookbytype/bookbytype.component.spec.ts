import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbytypeComponent } from './bookbytype.component';

describe('BookbytypeComponent', () => {
  let component: BookbytypeComponent;
  let fixture: ComponentFixture<BookbytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
