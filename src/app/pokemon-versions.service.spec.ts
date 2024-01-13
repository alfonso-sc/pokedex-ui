import { TestBed } from '@angular/core/testing';

import { PokemonVersionsService } from './pokemon-versions.service';

describe('PokemonVersionsService', () => {
  let service: PokemonVersionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonVersionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
