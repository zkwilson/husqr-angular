import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHusqComponent } from './view-husq.component';

describe('ViewHusqComponent', () => {
  let component: ViewHusqComponent;
  let fixture: ComponentFixture<ViewHusqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHusqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHusqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
