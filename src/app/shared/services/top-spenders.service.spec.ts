/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopSpendersService } from './top-spenders.service';

describe('Service: TopSpenders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopSpendersService]
    });
  });

  it('should ...', inject([TopSpendersService], (service: TopSpendersService) => {
    expect(service).toBeTruthy();
  }));
});
