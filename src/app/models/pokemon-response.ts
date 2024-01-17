import { PokemonDataListItem } from "./pokemon-data-list-item";

export interface PokemonResponse {
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalRecords: number,
    data: PokemonDataListItem[],

}
