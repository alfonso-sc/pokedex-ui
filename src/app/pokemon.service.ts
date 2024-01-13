import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { PokemonResponse } from './models/pokemon-response';
import { PokemonQueryParams } from './models/pokemon-query-params';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  public getMany({ name, generation, version, type }: PokemonQueryParams): Observable<PokemonResponse> {

    let params: HttpParams = new HttpParams()
    if (name) params = params.append("name", name)
    if (generation) params = params.append("generation", generation)
    if (version) params = params.append("version", version)
    if (type) params = params.append("type", type)

    return this.http.get<PokemonResponse>(
      `${environment.apiUrl}/Pokemon`,
      { params }
    )
  }
}
