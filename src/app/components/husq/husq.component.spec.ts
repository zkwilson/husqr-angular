import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HusqComponent} from './husq.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('HusqComponent', () => {
  let component: HusqComponent;
  let fixture: ComponentFixture<HusqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HusqComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HusqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
