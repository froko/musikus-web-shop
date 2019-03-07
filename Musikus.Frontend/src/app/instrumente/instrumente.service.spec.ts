import { TestBed } from '@angular/core/testing';

import { InstrumenteService } from './instrumente.service';

describe('InstrumenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumenteService = TestBed.get(InstrumenteService);
    expect(service).toBeTruthy();
  });
});
