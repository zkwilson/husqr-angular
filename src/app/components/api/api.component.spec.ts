import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ApiComponent} from './api.component';
import {HttpClientModule} from "@angular/common/http";

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
