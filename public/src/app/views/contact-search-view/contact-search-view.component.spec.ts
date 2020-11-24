import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSearchViewComponent } from './contact-search-view.component';

describe('ContactSearchViewComponent', () => {
  let component: ContactSearchViewComponent;
  let fixture: ComponentFixture<ContactSearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSearchViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
