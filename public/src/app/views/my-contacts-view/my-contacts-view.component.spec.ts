import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactsViewComponent } from './my-contacts-view.component';

describe('MyContactsViewComponent', () => {
  let component: MyContactsViewComponent;
  let fixture: ComponentFixture<MyContactsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyContactsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContactsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
