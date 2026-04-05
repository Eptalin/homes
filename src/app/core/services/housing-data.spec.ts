import { TestBed } from '@angular/core/testing';

import { HousingData } from './housing-data';

describe('HousingData', () => {
  let service: HousingData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
