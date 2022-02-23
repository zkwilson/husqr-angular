import { TestBed } from '@angular/core/testing';

import { CardsService } from './cards.service';
import {HttpClientModule} from "@angular/common/http";

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
