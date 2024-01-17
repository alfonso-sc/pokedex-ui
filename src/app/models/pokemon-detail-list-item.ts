import { PokemonAbility } from "./pokemon-ability";
import { PokemonImages } from "./pokemon-images";
import { PokemonMoves } from "./pokemon-moves";
import { PokemonType } from "./pokemon-type";

export interface PokemonDetailListItem {
    id: number,
    pokemonName: string,
    baseExperience: number,
    weight: number,
    height: number,
    flavorText: string,
    genus: string,
    evolutionLevel: string,
    evolvesInto: string,
    evolutionTrigger: string,
    abilities: PokemonAbility[],
    moves: PokemonMoves[]
    types: PokemonType[],
    generations: string[]
    versions: string[]
    images: PokemonImages,
}