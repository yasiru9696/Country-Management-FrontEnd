import { TestBed } from '@angular/core/testing';

import { CountryServiceService } from './countryService.service';

describe('CountryserviceService', () => {
  let service: CountryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
