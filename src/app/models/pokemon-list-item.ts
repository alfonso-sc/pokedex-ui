import { PokemonImages } from "./pokemon-images";
import { PokemonType } from "./pokemon-type";

export interface PokemonListItem {
    id: number,
    pokemonName: string,
    baseExperience: number,
    weight: number,
    height: number,
    flavorText: string,
    genus: string,
    types: PokemonType[],
    images: PokemonImages,
}