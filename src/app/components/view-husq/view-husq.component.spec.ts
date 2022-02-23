import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewHusqComponent} from './view-husq.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('ViewHusqComponent', () => {
  let component: ViewHusqComponent;
  let fixture: ComponentFixture<ViewHusqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewHusqComponent],
      imports: [RouterTestingModule]
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
