import { TestBed } from '@angular/core/testing';

import { DatosVacunacionService } from './datos-vacunacion.service';

describe('DatosVacunacionService', () => {
  let service: DatosVacunacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosVacunacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
