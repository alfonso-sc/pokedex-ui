import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { PokemonResponse } from './models/pokemon-response';
import { PokemonQueryParams } from './models/pokemon-query-params';
import { Observable } from 'rxjs';
import { PokemonDetailListItem } from './models/pokemon-detail-list-item';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  public getById(id: number): Observable<PokemonDetailListItem> {
    let params: HttpParams = new HttpParams()
    params.append("id", id)
    return this.http.get<PokemonDetailListItem>(
      `${environment.apiUrl}/Pokemon/${id}`,
      { params }
    )
  }

  public getMany({ name, generation, version, type, page }: PokemonQueryParams): Observable<PokemonResponse> {

    let params: HttpParams = new HttpParams()
    if (name) params = params.append("name", name)
    if (generation) params = params.append("generation", generation)
    if (version) params = params.append("version", version)
    if (type) params = params.append("type", type)

    const realPage = page ? page - 1 : 0;
    if (page) params = params.append("page", realPage)

    return this.http.get<PokemonResponse>(
      `${environment.apiUrl}/Pokemon`,
      { params }
    )
  }


}
