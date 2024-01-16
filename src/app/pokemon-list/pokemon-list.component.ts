import { map, Observable } from 'rxjs';

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonQueryParams } from '../models/pokemon-query-params';
import { PokemonResponse } from '../models/pokemon-response';
import { PokemonGenerationsService } from '../pokemon-generations.service';
import { PokemonTypesService } from '../pokemon-types.service';
import { PokemonVersionsService } from '../pokemon-versions.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  // all the pokemon data
  pokemonResponse$!: Observable<PokemonResponse>;

  // dropdown items
  pokemonGenerations$!: Observable<string[]>;
  pokemonVersions$!: Observable<string[]>;
  pokemonTypes$!: Observable<string[]>;

  // search params
  name?: string;
  generation?: string;
  version?: string;
  type?: string;
  page?: number;

  constructor(
    private pokemonGenerationsService: PokemonGenerationsService,
    private pokemonService: PokemonService,
    private pokemonTypeService: PokemonTypesService,
    private pokemonVersionsService: PokemonVersionsService,

    private route: ActivatedRoute,
    private router: Router,

  ) {
    this.loadPokemon();
    this.loadPokemonGenerations();
    this.loadPokemonVersions();
    this.loadPokemonTypes();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((qp) => {
      this.name = qp['name'];
      this.generation = qp['generation'];
      this.version = qp['version'];
      this.type = qp['type'];
      this.page = qp['page'];
      this.loadPokemon();
    })
  }

  updateQuery(): void {
    const displayPage = this.page ? this.page + 1 : undefined;
    const queryParams: PokemonQueryParams = {
      name: this.name || undefined,
      generation: this.generation || undefined,
      version: this.version || undefined,
      type: this.type || undefined,
      page: displayPage || undefined,
    }

    this.router.navigate(
      [],
      { queryParams }
    )

  }

  loadPokemon(): void {
    const searchParams: PokemonQueryParams = {
      name: this.name,
      generation: this.generation,
      version: this.version,
      type: this.type,
      page: this.page,
    }

    this.pokemonResponse$ = this
      .pokemonService
      .getMany(searchParams)
  }

  loadPokemonGenerations(): void {
    this.pokemonGenerations$ = this
      .pokemonGenerationsService
      .getPokemonGenerations();
  }

  loadPokemonVersions(): void {
    this.pokemonVersions$ = this
      .pokemonVersionsService
      .getPokemonVersions();
  }

  loadPokemonTypes(): void {
    this.pokemonTypes$ = this
      .pokemonTypeService
      .getPokemonTypes();
  }

  getPage(page: number): void {
    this.page = page;
    this.updateQuery();
  }

  log(val: any): void {
    console.log(val);
  }

  clearName(): void {
    this.name = undefined;
    this.updateQuery();
  }
}
