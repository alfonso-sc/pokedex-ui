import { Component, Input } from '@angular/core';
import { PokemonDataListItem } from '../models/pokemon-data-list-item';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss'
})
export class PokemonListItemComponent {
  @Input({ required: true }) pokemon!: PokemonDataListItem;
}
