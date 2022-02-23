import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComposeComponent} from './compose.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('ComposeComponent', () => {
  let component: ComposeComponent;
  let fixture: ComponentFixture<ComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComposeComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
