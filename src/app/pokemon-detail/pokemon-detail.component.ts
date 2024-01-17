import { concatMap, map } from 'rxjs';

import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  public pokemonId$ = this.route.params.pipe(map((params) => params['id']));
  public pokemonDetails$ = this.pokemonId$.pipe(
    concatMap(id => this.pokemonService.getById(id))
  )
  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  ) { }

  goBack(): void {
    this.location.back();
  }
}
