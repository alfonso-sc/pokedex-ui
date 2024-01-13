import { PokemonListItem } from "./pokemon-list-item";

export interface PokemonResponse {
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalRecords: number,
    data: PokemonListItem[],

}
