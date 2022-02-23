import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FriendComponent} from './friend.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('FriendComponent', () => {
  let component: FriendComponent;
  let fixture: ComponentFixture<FriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
