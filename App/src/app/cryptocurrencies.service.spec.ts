import { TestBed } from '@angular/core/testing';

import { CryptocurrenciesService } from './cryptocurrencies.service';

describe('CryptocurrenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptocurrenciesService = TestBed.get(CryptocurrenciesService);
    expect(service).toBeTruthy();
  });
});
