import { TestBed } from '@angular/core/testing';

import { PokemonGenerationsService } from './pokemon-generations.service';

describe('PokemonGenerationsService', () => {
  let service: PokemonGenerationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGenerationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
