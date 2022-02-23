import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxComponent } from './fox.component';
import {HttpClientModule} from "@angular/common/http";

describe('FoxComponent', () => {
  let component: FoxComponent;
  let fixture: ComponentFixture<FoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
