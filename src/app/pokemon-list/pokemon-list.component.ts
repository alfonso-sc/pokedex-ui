import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable, map } from 'rxjs';
import { PokemonQueryParams } from '../models/pokemon-query-params';
import { PokemonTypesService } from '../pokemon-types.service';
import { PokemonGenerationsService } from '../pokemon-generations.service';
import { PokemonVersionsService } from '../pokemon-versions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonResponse } from '../models/pokemon-response';

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
    private pokemonService: PokemonService,
    private pokemonGenerationsService: PokemonGenerationsService,
    private pokemonVersionsService: PokemonVersionsService,
    private pokemonTypeService: PokemonTypesService,
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
      this.loadPokemon();
    })
  }

  updateQuery(): void {
    const queryParams: PokemonQueryParams = {
      name: this.name || undefined,
      generation: this.generation || undefined,
      version: this.version || undefined,
      type: this.type || undefined,
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
    // .pipe(map((res) => res.data));
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
    this.loadPokemon();
  }
}
